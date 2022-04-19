import imgLoading from './../../images/loading.gif'
import {CenterComponent, Image} from './Loading.styles'
const Loading = () => {
  return (
    <CenterComponent>
      <Image src={imgLoading} alt='imagem de loading da página' />
      <h2>Loading....</h2>
    </CenterComponent>
  )
}

export default Loading;