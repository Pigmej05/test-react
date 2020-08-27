import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reduserRepository from "./app_reducer";

const rootReducer = combineReducers({
    repository: reduserRepository,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))