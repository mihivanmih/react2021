import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':'4839c802-e833-422a-9cf4-5744112ec8d3'
    }
})


//метод
export const userApi = {

    getUsersApi(pageSize, currentPage) {
        return (
            instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
                return response.data
            })
        )
    },
    postUser(Userid) {
        return (
            instance.post(`follow/`+ Userid).then(response => {
                return response.data
            })
        )
    },
    deleteUser(Userid) {
        return (
            instance.delete(`follow/`+ Userid).then(response => {
                return response.data
            })
        )
    },
    getLoginName() {
        return (
            instance.get(`auth/me`).then(response => {
                return response.data
        })
        )
    },
    getProfile(UserId) {
        console.warn('старый метод')
        return profileApi.getProfile(UserId)
    }

}


export const profileApi = {

    getProfile(UserId) {
        return (
            instance.get(`profile/`+UserId).then(response => {
                return response.data
            })
        )
    },
    getProfileStatus(UserId) {
        return (
            instance.get(`profile/status/`+UserId).then(response => {
                return response.data
            })
        )
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }

}

