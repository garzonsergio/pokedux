import { SET_POKEMONS } from "../Actions/types";

const initalState = {
  pokemons: [],
};

export const pokemonsReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
