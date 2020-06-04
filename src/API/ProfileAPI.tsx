import {instance, GetItemsType} from "./API"
import {ProfileType} from "../types"
export const ProfileAPI = {

    setProfile(id: number | null) {
        return(
            instance.get<ProfileType>(`profile/${id}`).then(response => {
                return (response.data)
            }))
    },
    getStatus(id:number) {
        return(
            instance.get<string>(`profile/status/${id}`).then(response => {
                return (response.data)
            }))
    },
    updateStatus(status:string) {
        return(
            instance.put(`profile/status`, {status: status} )
        )
    },
    savePhoto(photo:any) {
        const formData = new FormData();
        formData.append('image', photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType ) {

        return instance.put(`profile`, profile );
    }
};