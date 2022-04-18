import notFoundImg from '../../components/images/errorimg/Error.gif'
import {
  H1Not,
  DivNot,
  ImgNot,
  ButtomNot,
  Buttomback,
} from './NotFound.styles'

const NotFound = () => {
  return (
    <DivNot>
    <DivNot>
      <H1Not>Você errou o caminho tente novamente</H1Not>
      <ImgNot src={notFoundImg} alt="" />
      </DivNot>

      <DivNot>
      <Buttomback to="/"><ButtomNot>Return</ButtomNot></Buttomback>
      </DivNot>
      </DivNot>
  )
}

export default NotFound;