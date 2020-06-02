
export type FieldValidatorType = (value:string) => string | undefined

export const required: FieldValidatorType = (value) => {
    return (value ? undefined : 'Field is required')
};

type LengthValidatorCreatorType = (length: number) => (value:string) => string | undefined

export const maxlengthCreator:LengthValidatorCreatorType = (maxLength) => (value) => {
    if (!value) {value = ''}
    return ( value.length < maxLength ? undefined : `Max length is ${maxLength}`)
};
export const minlengthCreator:LengthValidatorCreatorType = (minLength) => (value) => {
    if (!value) {value = ''}
    return ( value.length > minLength ? undefined : `Min length is ${minLength}`)
};






