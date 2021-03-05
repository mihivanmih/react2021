const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialStatedsasad = {
    users: [
     /*   {id: 1, followed: true, fuulname: 'Антон', status: 'у меня есть бар', location: {city: 'Москва', country: 'Россия'}},
        {id: 2, followed: false, fuulname: 'Рома', status: 'работаю', location: {city: 'Пыть-Ях', country: 'Россия'}},
        {id: 3, followed: true, fuulname: 'Маша', status: 'учитель', location: {city: 'Москва', country: 'Россия'}},
        {id: 4, followed: false, fuulname: 'Леха', status: 'стендапер', location: {city: 'Киев', country: 'Украина'}},*/
    ]
}

export const usersReducer = (state = initialStatedsasad, action) => {

    switch (action.type) {
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users]}
        case FOLLOW:
            return {
                    ...state,
                    users: state.users.map( user => {
                        if(user.id === action.userId) {
                            return { ...user, followed: true}
                        }
                        return user
                    })
                }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: false}
                    }
                    return user
                })
            }
        default:
            return state;
    }

}

export const followAC = (userId) => ({   type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })