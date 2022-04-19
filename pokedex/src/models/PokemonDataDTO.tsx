import { HabilitiesDTO } from "./HabilitiesDTO"

export interface PokemonDataDTO {
  flavorText: string,
  habilities: HabilitiesDTO[], 
  height: number,
  image: string,
  moviments: string[], 
  name: string,
  principalType: any ,
  secondaryType: any ,
  typename: string[],
  url: string,
  weight: number
}