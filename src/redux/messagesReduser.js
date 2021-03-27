const ADD_MESSAGE = 'ADD-MESSAGE'

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
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }

}

export const addMessageActionCreator = (text) => ({   type: ADD_MESSAGE, newText: text })