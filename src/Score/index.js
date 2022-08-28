import {Para, Div, RPS, ParaDiv} from './styledComponents'

const Score = props => {
  const {score} = props
  return (
    <Div>
      <div>
        <RPS>ROCK</RPS>
        <RPS>PAPER</RPS>
        <RPS>SCISSORS</RPS>
      </div>
      <ParaDiv>
        <Para>Score</Para>
        <Para>{score}</Para>
      </ParaDiv>
    </Div>
  )
}

export default Score
