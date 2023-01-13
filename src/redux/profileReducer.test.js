import React from 'react';
import {addPostActionCreator, deletePost, profileReducer} from "./profileReducer";

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
// 1. test data
let action = addPostActionCreator("Новый текст")
let state = {
    posts: [
        {id: 1, message: 'Как дела?', like: getRandomInt(0, 120)},
        {id: 2, message: 'Чем занят?', like: getRandomInt(0, 120)},
        {id: 3, message: 'Займи 5000?', like: getRandomInt(0, 120)},
        {id: 4, message: 'Отдам через неделю', like: getRandomInt(0, 120)},
    ]
}

it('Длина массива должна стать 5', () => {
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
   expect(newState.posts.length).toBe(5)
})

it('Добавилось новое значение', () => {
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
   expect(newState.posts[4].message).toBe("Новый текст")
})

it('Удаление поста', () => {
    // 2. action
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

it('Неправильный id', () => {
    // 2. action
    let action = deletePost(1000)
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(4)
})
