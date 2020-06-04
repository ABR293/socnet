import axios from "axios";
import {ProfileType, UserType} from "../types"

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{"API-KEY":"4614b388-81cd-49ec-9ae3-88531d523857"}
});

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCapctha {
    CaptchaIsRequired = 10
}

// export const userAPI = {
//     getUsers(curentPage:number, pageSize:number) {
//         return (
//             instance.get<GetItemsType>(`users?page=${curentPage}&count=${pageSize}`,
//                 {}).then(response => {
//                 return (response.data)
//             })
//         )
//     },
//     unfollowUser(id:number) {
//         return instance.delete(`/follow/${id}`)
//     },

//     followUser(id:number) {
//         return instance.post(`follow/${id}`)
//     },

// };




// export const ProfileAPI = {

//     setProfile(id: number | null) {
//         return(
//             instance.get<ProfileType>(`profile/${id}`).then(response => {
//                 return (response.data)
//             }))
//     },
//     getStatus(id:number) {
//         return(
//             instance.get<string>(`profile/status/${id}`).then(response => {
//                 return (response.data)
//             }))
//     },
//     updateStatus(status:string) {
//         return(
//             instance.put(`profile/status`, {status: status} )
//         )
//     },
//     savePhoto(photo:any) {
//         const formData = new FormData();
//         formData.append('image', photo);

//         return instance.put(`profile/photo`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//     },
//     saveProfile(profile: ProfileType ) {

//         return instance.put(`profile`, profile );
//     }
// };


export type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCapctha
    messages: Array<string>
}
export type AuthMeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

// export const authAPI = {

//     authMe() {
//         return (
//             instance.get<AuthMeResponseType>('auth/me')
//                 .then(response => {
//                     return (response.data)
//                 })
//         )
//     },
//     login(email:string, password:string, rememberMe = false, captcha: null | string =null) {
//         return (
//             instance.post<LoginResponseType>('auth/login', {email, password, rememberMe, captcha})
//                 .then(response => {
//                     return (response.data)
//                 })
//         )
//     },
//     logout(){
//         return (
//             instance.delete('auth/login')
//         )
//     }

// };

// export const securityAPI = {
//     getCaptchaURL(){
//         return instance.get('security/get-captcha-url/');
//     }
// };



