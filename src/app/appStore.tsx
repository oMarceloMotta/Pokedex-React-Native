import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { appReducer } from './appSlice';
import { pokedexReducer } from '../screens/pokedex/pokedexSlice';
export { Provider as AppStoreProvider } from 'react-redux';
export { PersistGate as AppStorePersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  storage: AsyncStorage,
};

const persistedAppReducer = persistReducer(
  {
    ...persistConfig,
    key: 'app',
    blacklist: ['isLoading'],
  },
  appReducer,
);
const persistedPokedexReducer = persistReducer(
  {
    ...persistConfig,
    key: 'pokedex',
    blacklist: ['isLoading'],
  },
  pokedexReducer,
);
export const appStore = configureStore({
  reducer: {
    app: persistedAppReducer,
    pokedex: persistedPokedexReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const appPersistor = persistStore(appStore);

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
export const useAppDispatch: () => typeof appStore.dispatch = useDispatch;

export type AppStore = ReturnType<typeof appStore.getState>;
