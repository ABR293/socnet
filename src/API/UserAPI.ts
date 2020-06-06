import {instance, GetItemsType, ResponceType} from "./API"

export const userAPI = {
     getUsers (curentPage:number, pageSize:number) {
        return instance.get<GetItemsType>(`users?page=${curentPage}&count=${pageSize}`,{})
        .then(response => (response.data))
    },
    followUser(id:number) {
        return instance.post<ResponceType>(`follow/${id}`)
    },
    unfollowUser(id:number) {
        return instance.delete(`/follow/${id}`)
        .then(responce => responce.data) as Promise<ResponceType>
    },
};