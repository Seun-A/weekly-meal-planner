import { applyMiddleware, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import formCreateReducer from "./form-create/form-create.slice";

const middlewares = [logger]

// const store = createStore(rootReducer, applyMiddleware(...middlewares))
// const store = configureStore({ reducer: rootReducer })

const store = configureStore({
  reducer: {
    formCreate: formCreateReducer
  }
})

console.log(store.getState())
export default store




