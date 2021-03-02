let rerenderEntireTree = () => {
    console.log("стайт изменился")
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}




let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Как дела?', like: getRandomInt(0, 120)},
            {id: 2, message: 'Чем занят?', like: getRandomInt(0, 120)},
            {id: 3, message: 'Займи 5000?', like: getRandomInt(0, 120)},
            {id: 4, message: 'Отдам через неделю', like: getRandomInt(0, 120)},
        ],
        newPostText: "Новое сообщение"
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
    },
    sidebar: {},
}

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: getRandomInt(0, 120),
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree (state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree (state);
}

//callback
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;