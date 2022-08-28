import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {Button} from './styledComponents'
import Score from '../Score'

import ResultView from '../ResultView'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameRoute extends Component {
  state = {
    isShow: false,
    score: 0,
    imgArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
  }

  getResult = (img1, img2) => {
    if (img1.id === 'ROCK') {
      switch (img2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (img1.id === 'PAPER') {
      switch (img2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (img2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  scoreUpdate = id => {
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choice1 = choicesList.filter(eachValue => eachValue.id === id)
    const result = this.getResult(choice1[0], choice2)
    console.log(choice1[0], choice2)
    let updatedScore = score
    if (result === 'YOU WON') {
      updatedScore += 1
    } else if (result === 'YOU LOSE') {
      updatedScore -= 1
    }
    this.setState({
      isShow: true,
      score: updatedScore,
      imgArray: [choice1[0], choice2],
      text: result,
    })
  }

  restart = () => {
    this.setState({isShow: false})
  }

  render() {
    const {score, isShow, text, imgArray} = this.state
    return (
      <div
        style={{
          backgroundColor: '#223a5f',
          color: '#ffffff',
          padding: '10px',
          height: '100vh',
        }}
      >
        <h1 style={{textAlign: 'center'}}>Rock Paper Scissors</h1>
        <Score score={score} />
        <div>
          <ResultView
            choicesList={choicesList}
            isShow={isShow}
            text={text}
            scoreUpdate={this.scoreUpdate}
            imgArray={imgArray}
            restart={this.restart}
          />
        </div>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <div className="RulesBtn">
                <Button type="button" onClick={this.onClickRulesBtn}>
                  Rules
                </Button>
              </div>
            }
          >
            {close => (
              <>
                <button
                  type="button"
                  className="trigger-button closeBtn"
                  onClick={() => close()}
                >
                  Close
                </button>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="Rules"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default GameRoute
