const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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

        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: getRandomInt(0, 120),
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._state.rerenderEntireTree (store);
        }
        else if(action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newPostText,
            }
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newPostText = "";
            this._state.rerenderEntireTree (store);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._state.rerenderEntireTree (store);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.messagesPage.newPostText = action.newText;
            this._state.rerenderEntireTree (store);
        }
    },
}


export const addPostActionCreator = () => ({   type: ADD_POST })
export const addMessageActionCreator = () => ({   type: ADD_MESSAGE })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;