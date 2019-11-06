import React from 'react';
import style from './Login.module.css';
import {reduxForm, Field} from "redux-form/";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={style.input}>
                <Field component={"input"} name={'login'} placeholder={'login'}/>
            </div>
            <div className={style.input}>
                <Field component={"input"} name={'Password'} placeholder={'Password'}/>
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


