import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messagesReduser";
import {usersReducer} from "./userReducer";
import {authReduser} from "./authReducer";
import thunkMiddlewaer from 'redux-thunk'

let reducers = combineReducers({
    profileReducer,
    messageReducer,
    usersReducer,
    authReduser
});



let store = createStore(reducers, applyMiddleware(thunkMiddlewaer));

window.store = store;

export default store;