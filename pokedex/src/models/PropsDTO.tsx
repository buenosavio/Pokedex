import { AppDispatch } from "../store";
import { PokemonDataDTO } from "./PokemonDataDTO"

interface DataDTO {
  data: PokemonDataDTO[],
}

interface LoadingDTO {
  loading: boolean,
}

interface ErrorDTO {
  error: boolean,
}

interface DispatchDTO {
  dispatch: AppDispatch,
}

type PropsDTO = DataDTO & LoadingDTO & ErrorDTO & DispatchDTO

export default PropsDTO;