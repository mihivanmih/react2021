const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newPostText,
            }
            state.messages.push(newMessage);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({   type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })