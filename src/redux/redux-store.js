import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messagesReduser";
import {usersReducer, usersReducerNew} from "./userReducer";
import {authReduser} from "./authReducer";
import thunkMiddlewaer from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {appReduser} from "./appReducer";

let reducers = combineReducers({
    profileReducer,
    messageReducer,
    usersReducer: usersReducerNew,
    authReduser,
    appReduser,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // плагин для хрома
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewaer)));

//let store = createStore(reducers, applyMiddleware(thunkMiddlewaer));
window.__store__ = store;

export default store;