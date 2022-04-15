import { Action } from "redux"
import { api } from "../../api"



export const handlePokemon = (dispatch: any) => {

  const variavel = {
    type: 'GET_POKEDEX',
    'entry_number': 0,
  }
  dispatch(variavel)
}

// function getParameter(theParameter) {
//   var params = window.location.search.substr(1).split('&');

//   for (var i = 0; i < params.length; i++) {
//       var p = params[i].split('=');
//       if (p[0] == theParameter) {
//           return decodeURIComponent(p[1]);
//       }
//   }
//   return false;
//   }
//   var valorHidSelProduto = getParameter('stars')
//   alert(stars);

// https://pokeapi.co/api/v2/pokemon-species/25/