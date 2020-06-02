import React, {useEffect} from 'react';
import style from './Login.module.css';
import {reduxForm, InjectedFormProps} from "redux-form/";
import {Input, LoginFormValuesTypeKeys, LoginFormValuesType, createField} from "../../Common/FormControls/FormControls";
import {maxlengthCreator, minlengthCreator,  required} from "../../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../../Redux/AuthReducer";
import { AppStateType } from '../../../Redux/Store';

const maxlength20 = maxlengthCreator(20);
const minlength4 = minlengthCreator(3);  

type LoginFormOwnPropsType = {
    captchaURL: string | null
}


const LoginForm:React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({error, handleSubmit, captchaURL}) => {

    useEffect(() => {
        document.title = `Login`;
    });

    return(
        <form onSubmit={handleSubmit}>
            <div className={style.input}>
                { createField<LoginFormValuesTypeKeys>('Eemail', 'email',[required, maxlength20, minlength4], Input )}
                { createField<LoginFormValuesTypeKeys>('password', 'password',[required, maxlength20, minlength4], Input, {type: "passvord"})}
                { createField<LoginFormValuesTypeKeys>( undefined, 'rememberMe',[required, maxlength20, minlength4], Input, {type:"checkbox"}, "remember me" )}
             
                {captchaURL && <img src={captchaURL} alt="ups! :("/>}
                {captchaURL && createField<LoginFormValuesTypeKeys>('captcha', 'captcha',[required, maxlength20, minlength4], Input )}
            </div>
            { error ? <div className={style.formError}> {error }</div> : ''}
            <div>
                <button>Login</button>

            </div>
        </form>
    )
};


type MapStateToPropsType = {
    captchaURL: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string| null) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType 

let LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm);

const LoginPage:React.FC<PropsType> = ({login, isAuth, captchaURL}) => {
    const onSubmit = (formData:LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    return (
        isAuth ? <Redirect to={'profile/'}/> :
            <div className={style.login}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
            </div>
    )
};
 
const mapStateToProps = (state:AppStateType) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth,
});

export default connect (mapStateToProps, {login} )(LoginPage);


