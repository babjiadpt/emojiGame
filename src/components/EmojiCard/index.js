// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, isFoundEmoji} = props
  const {id, emojiName, emojiUrl} = emoji

  const onClickEmoji = () => {
    isFoundEmoji(id)
  }

  return (
    <li className="list-item-container">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
