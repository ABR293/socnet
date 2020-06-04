import {instance} from "./API"

export const dialogsAPI = {
    getDialogs(){
        return instance.get(`dialogs/`);
    },
    getDialog(id:number){
        return instance.get(`dialogs/${id}/messages`);
    },
    startChating(id:number){
        return instance.put(`dialogs/${id}`);
    },
    sendTheMessage(id:number, message:string){
        return instance.post(`dialogs/${id}/messages`,message);
    },
};