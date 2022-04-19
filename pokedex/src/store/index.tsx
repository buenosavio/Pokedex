import { compose, createStore } from "redux";
import rootReducer from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, reduxDevTools())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
