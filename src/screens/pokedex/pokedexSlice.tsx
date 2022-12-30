import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../../types';

const pokemonInitialState = [] as Pokemon[];
export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: pokemonInitialState,
  reducers: {
    setPokemons(state: any, action: PayloadAction<{ pokemons: Pokemon[] }>) {
      state.pokedex = action.payload.pokemons;
    },
  },
});

export const pokedexActions = pokedexSlice.actions;
export const pokedexReducer = pokedexSlice.reducer;
