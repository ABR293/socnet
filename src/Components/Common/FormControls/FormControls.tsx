import React, { ReactNode } from 'react';
import style from './FormControls.module.css';
import { Field, WrappedFieldProps, WrappedFieldMetaProps } from "redux-form";
import { FieldValidatorType } from '../../../Utils/Validators/Validators';


type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

type FormControlType = (params: FormControlPropsType) => React.ReactNodeArray

const FormControl: React.FC<FormControlPropsType> = ({ meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const { input, meta, child, ...restProps } = props;
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const { input, meta, child, ...restProps } = props;
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};


export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>


export function createField<FormKeysType extends string>(
    placeholder: string,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC,
    props?: {},
    text?: ""
) {
    return (
        <div>
            <Field placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            /> {text}
        </div>
    )
};