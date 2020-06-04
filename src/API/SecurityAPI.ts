import {instance} from "./API"

export const securityAPI = {
    getCaptchaURL(){
        return instance.get('security/get-captcha-url/');
    }
};