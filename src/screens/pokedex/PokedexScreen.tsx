import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/appStore';
import { useLazyQuery } from '@apollo/client';
import { queryGetPokemonPage } from './queries/queryGetPokemonPage';
import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Pokemon } from '../../../types';
import { pokedexActions } from './pokedexSlice';
import { Center, FlatList, Spinner } from 'native-base';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

export function PokedexScreen({ navigation }: StackScreenProps<ParamListBase>) {
  const dispatch = useAppDispatch();
  const [getPokemonPage, { loading }] = useLazyQuery(queryGetPokemonPage, {
    fetchPolicy: 'no-cache',
  });
  const pokemons = useAppSelector((state: any) => state.pokedex.pokedex);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const { data } = await getPokemonPage();
      const pokemonsDecode: Pokemon[] = pokemonDecoder(data);
      dispatch(pokedexActions.setPokemons({ pokemons: pokemonsDecode }));
    });
    return unsubscribe;
  }, [dispatch, getPokemonPage, navigation]);
  return (
    <Center height="full">
      {pokemons && pokemons.length > 0 && (
        <FlatList
          width="full"
          data={pokemons}
          renderItem={({ item: { name, image, id } }: any) => (
            <PokemonCard name={name} image={image} id={id} />
          )}
          keyExtractor={(item: any) => item.id}
        />
      )}
      {loading && (
        <Center flex="1" alignSelf="center">
          <Spinner size="large" />
        </Center>
      )}
    </Center>
  );

  function pokemonDecoder(data: any): Pokemon[] {
    if (data === undefined) {
      return [];
    }
    const { pokemon_v2_pokemon: pokemons } = data;
    const items = pokemons.map((pokemon: any) => ({
      name: pokemon.name,
      id: pokemon.id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`,
    }));
    return items;
  }
}
