/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], isGameEnd: false, topScore: 0}

  renderFinishTheGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setState({isGameEnd: true})
  }

  isFoundEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isFoundEmoji = clickedEmojiList.includes(id)

    if (isFoundEmoji) {
      this.renderFinishTheGameAndSetTopScore(clickedEmojiList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojiList.length) {
        this.renderFinishTheGameAndSetTopScore(clickedEmojiList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  renderShuffleEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiesList = () => {
    const {clickedEmojiList, topScore} = this.state
    const shuffledEmojiList = this.renderShuffleEmojiList()
    const currentScore = clickedEmojiList.length

    return (
      <>
        <NavBar currentScore={currentScore} topScore={topScore} />
        <ul className="emoji-list-container">
          {shuffledEmojiList.map(eachEmoji => (
            <EmojiCard
              emoji={eachEmoji}
              key={eachEmoji.id}
              isFoundEmoji={this.isFoundEmoji}
            />
          ))}
        </ul>
      </>
    )
  }

  isPlayAgainButtonClicked = array => {
    const {topScore} = this.state
    if (array[1] > topScore) {
      this.setState({topScore: array[1]})
    }
    this.setState({isGameEnd: array[0], clickedEmojiList: []})
  }

  renderGameWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state

    const isWonGame = emojisList.length === clickedEmojiList.length

    return (
      <WinOrLoseCard
        isWonGame={isWonGame}
        score={clickedEmojiList.length}
        outOfScore={emojisList.length}
        isPlayAgainButtonClicked={this.isPlayAgainButtonClicked}
      />
    )
  }

  render() {
    const {isGameEnd} = this.state

    return (
      <div className="emoji-game-app-container">
        {isGameEnd ? this.renderGameWinOrLose() : this.renderEmojiesList()}
      </div>
    )
  }
}

export default EmojiGame
