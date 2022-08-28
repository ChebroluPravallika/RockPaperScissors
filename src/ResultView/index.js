import {Image, Button, ImageCont, Div, PlayAgainBtn} from './styledComponents'

const ResultView = props => {
  const {choicesList, isShow, text, scoreUpdate, imgArray, restart} = props

  const onClickRestart = () => {
    restart()
  }

  return (
    <div>
      {!isShow && (
        <div>
          <ImageCont>
            <Button
              data-testid="rockButton"
              type="button"
              onClick={() => scoreUpdate(choicesList[0].id)}
            >
              <Image
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
                key={choicesList[0].id}
              />
            </Button>
            <Button
              data-testid="scissorsButton"
              type="button"
              onClick={() => scoreUpdate(choicesList[1].id)}
            >
              <Image
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
                key={choicesList[1].id}
              />
            </Button>
          </ImageCont>
          <ImageCont>
            <Button
              data-testid="paperButton"
              type="button"
              onClick={() => scoreUpdate(choicesList[2].id)}
            >
              <Image
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
                key={choicesList[2].id}
              />
            </Button>
          </ImageCont>
        </div>
      )}
      {isShow && (
        <div>
          <ImageCont>
            <Image src={imgArray[0].imageUrl} alt="your choice" />
            <Image src={imgArray[1].imageUrl} alt="opponent choice" />
          </ImageCont>
          <Div>
            <p style={{textAlign: 'center'}}>{text}</p>
            <PlayAgainBtn type="button" onClick={onClickRestart}>
              PLAY AGAIN
            </PlayAgainBtn>
          </Div>
        </div>
      )}
    </div>
  )
}

export default ResultView
