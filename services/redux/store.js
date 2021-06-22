import { configureStore } from "@reduxjs/toolkit";

import authenticatedReducer from "../authenticatedSlice";

function createStore(preloadedState) {
  return configureStore({
    reducer: {
      authenticated: authenticatedReducer,
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
