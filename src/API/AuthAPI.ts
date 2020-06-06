import {instance, ResponceType, ResultCodesEnum, ResultCodeForCapcthaEnum} from "./API"

type LoginData = {
    userId: number
}
type AuthMeData = {
    id: number
    email: string
    login: string
}

export const authAPI = {
    authMe() {
        return instance.get<ResponceType<AuthMeData>>('auth/me')
        .then(response => (response.data))
    },
    login(email:string, password:string, rememberMe = false, captcha: null | string =null) {
        return instance.post<ResponceType<LoginData, ResultCodesEnum | ResultCodeForCapcthaEnum>>('auth/login', {email, password, rememberMe, captcha})
        .then(response => (response.data))
    },
    logout(){
        return instance.delete('auth/login')
    }
};