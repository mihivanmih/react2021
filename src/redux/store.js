import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messagesReduser";

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Как дела?', like: getRandomInt(0, 120)},
                {id: 2, message: 'Чем занят?', like: getRandomInt(0, 120)},
                {id: 3, message: 'Займи 5000?', like: getRandomInt(0, 120)},
                {id: 4, message: 'Отдам через неделю', like: getRandomInt(0, 120)},
            ],
            newPostText: "Новый пост"
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Завтра едем смотреть динозавров'},
                {id: 3, message: 'В эко парк'},
            ],
            dialogs: [
                {id: 1, name: 'Маша'},
                {id: 2, name: 'Антон'},
                {id: 3, name: 'Ванька'},
                {id: 4, name: 'Танька'},
            ],
            newPostText: "Новое сообщение"
        },
        sidebar: {},
    },
    /*rerenderEntireTree: () => {
        console.log("стайт изменился")
    },*/
    getState() {
        return this._state
    },
    subscribe: (observer) => {
        store._state.rerenderEntireTree = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer( this._state.messagesPage, action)
        this._state.rerenderEntireTree (store)

    },
}

export default store;