import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':'e00624ca-0648-4efd-9fcc-56771035be83'
    }
})


//метод
export const userApi = {

    getUsersApi(pageSize, currentPage=1) {
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

export const loginApi = {

    loginPost(email, password, rememberMe) {
        return (
            instance.post(`/auth/login`, {
                email, password, rememberMe
            }).then(response => {
                return response.data
            })
        )
    },
    logoutPost() {
        return (
            instance.delete(`/auth/login`).then(response => {
                return response.data
            })
        )
    }

}

