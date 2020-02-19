import React, {useEffect} from 'react';
import style from './Login.module.css';
import {reduxForm, Field} from "redux-form/";
import {Input} from "../../Common/FormControls/FormControls";
import {maxlengthCreator, minlengthCreator,  required} from "../../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../../Redux/AuthReducer";

const maxlength20 = maxlengthCreator(20);
const minlength4 = minlengthCreator(3);

const LoginForm = (props) => {

    useEffect(() => {
        document.title = `Login`;
    });

    return(
        <form onSubmit={props.handleSubmit}>
            <div className={style.input}>
                <Field
                    component={Input}
                    validate={[required, maxlength20, minlength4]}
                    name='email'
                    placeholder='email'/>
            </div>
            <div className={style.input}>
                <Field
                    component={Input}
                    validate={[required, minlength4, maxlength20]}
                    name='password'
                    type='password'
                    placeholder='password'/>
            </div>

            <div className={style.checkbox}>
                <p>Remember me</p>
                <Field component={"input"} name={'rememberMe'} type={"checkbox"}/>
            </div>
            <div>
                {props.captchaURL && <img src={props.captchaURL} alt="ups! :("/>}
                {props.captchaURL &&
                <Field
                    component={Input}
                    validate={[required]}
                    name='captcha'
                    placeholder='captcha'
                />}
            </div>
            <div>
                <button>Login</button>
            </div>
            { props.error ? <div className={style.formError}> {props.error }</div> : ''}

        </form>
    )
};

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    return (
        props.isAuth ? <Redirect to={'profile/'}/> :
            <div className={style.login}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
            </div>
    )
};

const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth,
});

export default connect (mapStateToProps, {login} )(LoginPage);


