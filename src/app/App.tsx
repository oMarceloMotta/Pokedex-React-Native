import React from 'react';
export { Provider as AppStoreProvider } from 'react-redux';
export { PersistGate as AppStorePersistGate } from 'redux-persist/integration/react';
import { ApolloProvider, apolloClient } from '../utils/apolloClient';
import {
  AppStoreProvider,
  appStore,
  AppStorePersistGate,
  appPersistor,
} from './appStore';
import AppNavigator from './AppNavigator';
import { AppLayoutProvider } from './AppLayoutProvider';
const App = () => {
  return (
    <AppStoreProvider store={appStore}>
      <AppStorePersistGate persistor={appPersistor}>
        <ApolloProvider client={apolloClient}>
          <AppLayoutProvider>
            <AppNavigator />
          </AppLayoutProvider>
        </ApolloProvider>
      </AppStorePersistGate>
    </AppStoreProvider>
  );
};

export default App;
