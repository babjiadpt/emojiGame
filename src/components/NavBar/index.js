// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore} = props

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-title">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
