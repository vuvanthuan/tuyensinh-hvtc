import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import { storage } from "./persist";
import { SampleReducer } from "./slices";

const samplePersistConfig = {
  key: "sample",
  storage,
};

export const rootReducer = combineReducers({
  sample: persistReducer(samplePersistConfig, SampleReducer),
});
