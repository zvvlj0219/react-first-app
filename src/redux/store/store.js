import { createStore as reduxStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { connectRouter,routerMiddleware } from "connected-react-router";

//Import reducers

export default function createStore(history){
  return reduxStore(
    combineReducers({
      router:connectRouter(history)
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}