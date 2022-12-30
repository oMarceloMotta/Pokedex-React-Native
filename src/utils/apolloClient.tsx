import { ApolloClient, InMemoryCache } from '@apollo/client';

export {
  ApolloProvider,
  useQuery,
  useLazyQuery,
  useMutation,
  gql,
} from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});