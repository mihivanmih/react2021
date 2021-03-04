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

/*    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newPostText,
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.dialogs = [...state.dialogs]
            stateCopy.messages.push(newMessage);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }*/

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newPostText,
            }
            return {
                ...state,
                newPostText: "",
                messages: [...state.messages, newMessage]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({   type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })