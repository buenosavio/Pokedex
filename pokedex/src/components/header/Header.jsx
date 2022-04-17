import {TitlePokedex, Center, Logo} from './Header.styles'
import logoHeader from './../../images/logoHeader.png'
import { AiOutlineSortAscending } from "react-icons/ai";

const Header = () => {
  return(
    <TitlePokedex>
    <Center><Logo src={logoHeader}/>Pokédex</Center> 
    <AiOutlineSortAscending/>
  </TitlePokedex>
  )
}

export default Header;