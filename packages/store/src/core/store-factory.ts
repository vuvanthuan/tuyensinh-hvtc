import type { Reducer } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { storage } from "./persist";

interface ConfigOpts {
  reducer: Reducer;
  persistKey?: string;
  blacklist?: string[];
  whitelist?: string[];
}

/**
 * Creates a pre-configured Redux store with redux-persist and standard middlewares.
 */
export const createAppStore = ({
  reducer,
  persistKey = "root",
  blacklist = [],
  whitelist,
}: ConfigOpts) => {
  const persistConfig = {
    key: persistKey,
    storage,
    blacklist,
    whitelist,
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
