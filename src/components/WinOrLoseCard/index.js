// Write your code here.
import {Component} from 'react'

import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {isWonGame, score, outOfScore, isPlayAgainButtonClicked} = this.props

    const ImageUrl = isWonGame
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

    const winLoseText = isWonGame ? 'You Won' : 'You Lose'
    const scoreLabel = isWonGame ? 'Best Score' : 'Score'

    const onClickPlayAgainButton = () => {
      isPlayAgainButtonClicked([false, score])
    }

    return (
      <>
        <div className="nav-container">
          <div className="win-lose-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="logo"
            />
            <h1 className="emoji-title">Emoji Game</h1>
          </div>
        </div>
        <div className="game-win-lose-container">
          <img src={ImageUrl} alt="win or lose" className="win-lose-image" />
          <div className="text-container">
            <h1 className="win-lose-title">{winLoseText}</h1>
            <p className="score-label">{scoreLabel}</p>
            <p className="score-value">
              {score}/{outOfScore}
            </p>
            <button
              type="button"
              className="play-again-button"
              onClick={onClickPlayAgainButton}
            >
              Play Again
            </button>
          </div>
        </div>
      </>
    )
  }
}
export default WinOrLoseCard
