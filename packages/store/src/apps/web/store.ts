import type { TypedUseSelectorHook } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { createAppStore } from "../../core/store-factory";
import { sampleReducer } from "./sample/infrastructure/sample.slice";

const rootReducer = combineReducers({
  sample: sampleReducer,
  // Add other slices here
});

export const { store, persistor } = createAppStore({
  reducer: rootReducer,
  persistKey: "web-root",
  blacklist: ["search"], // or whatever was blacklisted in admin
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
