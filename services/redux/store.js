import { configureStore } from "@reduxjs/toolkit";

import authenticatedReducer from "../authenticatedSlice";
import alertSystemReducer from "../../components/AlertSystem/services/alertSystemSlice";

function createStore(preloadedState) {
  return configureStore({
    reducer: {
      authenticated: authenticatedReducer,
      alertSystem: alertSystemReducer,
    },
    preloadedState,
  });
}

let store;

export function initializeStore(preloadedState) {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === "undefined") return _store;

  if (!store) store = _store;

  return _store;
}
