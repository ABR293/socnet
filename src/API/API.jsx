import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{"API-KEY":"4614b388-81cd-49ec-9ae3-88531d523857"}
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
export const ProfileAPI = {

    setProfile(id) {
        return(
            instance.get(`profile/${id}`).then(response => {
                return (response.data)
            }))
    },
    getStatus(id) {
        return(
            instance.get(`profile/status/${id}`).then(response => {
                return (response.data)
            }))
    },
    updateStatus(status) {
        return(
            instance.put(`profile/status`, {status: status} )
        )
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {

        return instance.put(`profile`, profile );
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
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post('auth/login', {email, password, rememberMe})
                .then(response => {
                    return (response.data)
                })
        )
    },
    logout(){
        return (
            instance.delete('auth/login')
        )
    }

};

export const securityAPI = {
    getCaptchaURL(){
        return instance.get('security/get-captcha-url/');
    }
};

