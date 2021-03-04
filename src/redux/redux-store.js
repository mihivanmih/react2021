import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messagesReduser";

let reducers = combineReducers({
    profileReducer,
    messageReducer
});



let store = createStore(reducers);

window.store = store;

export default store;