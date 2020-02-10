export const required = (value) => {
    return (value ? undefined : 'Field is required')
};
export const maxlengthCreator = (maxLength) => (value) => {
    if (!value) {value = ''}
    return ( value.length < maxLength ? undefined : `Max length is ${maxLength}`)
};
export const minlengthCreator = (minLength) => (value) => {
    if (!value) {value = ''}
    return ( value.length > minLength ? undefined : `Min length is ${minLength}`)
};






