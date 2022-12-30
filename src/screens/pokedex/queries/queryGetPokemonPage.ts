import { gql } from '../../../utils/apolloClient';

export const queryGetPokemonPage = gql`
  query {
     pokemon_v2_pokemon(limit: 9) {
        id
        name
    }
  }
`;
