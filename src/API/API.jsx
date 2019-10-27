import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{"API-KEY":"ccef68ea-2a85-4c4b-b185-6ed59a41001b"}
});

export const userAPI = {
    getUsers(curentPage, pageSize) {
        return (
            instance.get(`users?page=${curentPage}&count=${pageSize}`,
                {}).then(response => {
                return (response.data)
            })
        )
    },
    unfollowUser(id) {
        return (
            instance.delete(`/follow/${id}`)
                .then(response => {
                    return (response.data)
                })
        )
    },
    followUser(id) {
        return (
            instance.post(`follow/${id}`)
                .then(response => {
                    return (response.data)
                })
        )
    }

};

export const authAPI = {

    authMe() {
        return (
            instance.get('auth/me')
                .then(response => {
                    return (response.data)
                })
        )
    }

};