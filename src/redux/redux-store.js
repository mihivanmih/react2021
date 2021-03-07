import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messagesReduser";
import {usersReducer} from "./userReducer";
import {authReduser} from "./authReducer";

let reducers = combineReducers({
    profileReducer,
    messageReducer,
    usersReducer,
    authReduser
});



let store = createStore(reducers);

window.store = store;

export default store;