import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = (uri: string) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};
