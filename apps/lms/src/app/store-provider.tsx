"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { lmsPersistor, lmsStore } from "@acme/store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={lmsStore}>
      <PersistGate loading={null} persistor={lmsPersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
