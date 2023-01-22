import { CombinedState, combineReducers, createStore, Reducer } from 'redux';
import { configureStore, PayloadAction } from '@reduxjs/toolkit'
import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper';
import { session } from './session/session.store';

import { Session } from '../common/types/app/types';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const combinedReducer = combineReducers({
  // [pokemonApi.reducerPath]: pokemonApi.reducer,
  [session.name]: session.reducer,
})


const reducer = (state: ReturnType<typeof combinedReducer>, action: PayloadAction<any>) => {
  console.log(state)
  if (action.type === HYDRATE) {
    const session = action.payload.session;
    // console.log("HYDRATE", action.payload)
    const nextState = {
      ...state, // use previous state
      session: {
        ...session
      }
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const persistConfig: PersistConfig<any> = {
  key: 'root',
  version: 1,
  storage,
  // blacklist: [session.name],
  debug: true,
  writeFailHandler: (error: Error) => {
    console.log('perssite', error)
  },
};
// @ts-ignore
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  // middleware: (gDM) => gDM().concat(pokemonApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistore = persistStore(store)
store._persistor = persistore
export const makeStore = () => store

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: false
});