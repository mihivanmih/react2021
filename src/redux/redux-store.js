import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messagesReduser";
import {usersReducer} from "./userReducer";
import {authReduser} from "./authReducer";
import thunkMiddlewaer from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profileReducer,
    messageReducer,
    usersReducer,
    authReduser,
    form: formReducer
});



let store = createStore(reducers, applyMiddleware(thunkMiddlewaer));

window.store = store;

export default store;