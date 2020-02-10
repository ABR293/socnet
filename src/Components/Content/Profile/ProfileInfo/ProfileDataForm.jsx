import React from "react";
import {createField, Input, Textarea} from "../../../Common/FormControls/FormControls";
import style from "../../../Common/FormControls/FormControls.module.css";
import style2 from "./ProfileDataForm.module.css";
import {reduxForm} from "redux-form/";


const ProfileForm = ({profile, close, saveProfile}) => {


    const onSubmit = (Data) => {
        console.log(Data);
        saveProfile(Data);
        close();
    };

    return <ProfileDataFormReduxForm
        onSubmit={onSubmit}
        initialValues={profile}
        profile={profile}
        close={close}
        />
};

const ProfileDataForm = ({handleSubmit, profile, error, close}) => {


    return (
        <div>
            <form className={style2.editForm} onSubmit={handleSubmit}>
                <div className={style2.submit}>
                    <button  type='submit'>save</button>
                    <button onClick={close}>Cancel</button>
                </div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div className={style2.about}>
                    <h2>Information</h2>
                    <div className={style2.item}>
                        <b>Full name :</b> {createField("Full name", "fullName", [], Input)}
                    </div>
                    <div className={style2.item}>
                        <b>Looking for a job :</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                    </div>

                    <div className={style2.item}>
                        <b>My skills :</b>
                        {createField("My skills", "lookingForAJobDescription", [], Textarea)}
                    </div>
                    <div className={style2.item}>
                        <b>About me :</b>
                        {createField("About me", "aboutMe", [], Textarea)}
                    </div>
                </div>
                <div className={style2.contacts}>
                    <h2>Contacts:</h2>
                    <div className={style2.contacts__block}>
                        {Object.keys(profile.contacts).map(key => {
                            return (
                                <div className={style2.item} key={key}>
                                    <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
                                </div>
                            )
                        })}
                    </div>

                </div>
            </form>
        </div>)
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileForm;