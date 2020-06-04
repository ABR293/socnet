import {instance, GetItemsType} from "./API"

export const userAPI = {
     getUsers (curentPage:number, pageSize:number) {
        return (
            instance.get<GetItemsType>(`users?page=${curentPage}&count=${pageSize}`,
                {}).then(response => {
                return (response.data)
            })
        )
    },
    unfollowUser(id:number) {
        return instance.delete(`/follow/${id}`)
    },

    followUser(id:number) {
        return instance.post(`follow/${id}`)
    },

};