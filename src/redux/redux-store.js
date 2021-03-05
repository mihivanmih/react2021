import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messagesReduser";
import {usersReducer} from "./userReducer";

let reducers = combineReducers({
    profileReducer,
    messageReducer,
    usersReducer
});



let store = createStore(reducers);

window.store = store;

export default store;