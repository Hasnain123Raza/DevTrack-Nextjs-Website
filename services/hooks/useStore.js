import { initializeStore } from "../redux/store.js";

export default function useStore(preloadedState) {
  return initializeStore(preloadedState);
}
