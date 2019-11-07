import React from 'react';
import style from './Login.module.css';
import {reduxForm, Field} from "redux-form/";
import {Input} from "../../Common/FormControls/FormControls";
import {maxlengthCreator, minlengthCreator,  required} from "../../../Utils/Validators/Validators";

const maxlength20 = maxlengthCreator(20);
const minlength6 = minlengthCreator(6);

const LoginForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div className={style.input}>
                <Field
                    component={Input}
                    validate={[required, maxlength20, minlength6]}
                    name={'login'}
                    placeholder={'login'}/>
            </div>
            <div className={style.input}>
                <Field
                    component={Input}
                    validate={[required, minlength6, maxlength20]}
                    name={'Password'}
                    placeholder={'Password'}/>
            </div>
            <div className={style.checkbox}>
                <p>Remember me</p>
                <Field component={"input"} name={'rememberMe'} type={"checkbox"}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };
    return(
        <div className={style.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    )
};

export default Login;


