import {instance, AuthMeResponseType, LoginResponseType} from "./API"

export const authAPI = {
    authMe() {
        return (
            instance.get<AuthMeResponseType>('auth/me')
                .then(response => {
                    return (response.data)
                })
        )
    },
    login(email:string, password:string, rememberMe = false, captcha: null | string =null) {
        return (
            instance.post<LoginResponseType>('auth/login', {email, password, rememberMe, captcha})
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