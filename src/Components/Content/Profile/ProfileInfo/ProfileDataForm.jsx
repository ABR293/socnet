import React from "react";
//import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../../Common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import style from "../../../Common/FormControls/FormControls.module.css";
import style2 from "./ProfileDataForm.module.css";
import noAvatar from "../../../../img/NA2.gif";





const ProfileDataForm = ({onSubmit, profile, error, close}) => {

    const onMainPhotoSelected = (element) => {
        element.target.files.length && profile.savePhoto(element.target.files[0]);
    };

    return (
        <div>
            <form className={style2.editForm} onSubmit={onSubmit}>

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }

                <div className={style2.photo}>
                    <img src={profile.avatar === null ? noAvatar : profile.avatar} alt="NICHT AVATAREN!!!"/>
                    <input type="file" onChange={onMainPhotoSelected}/>
                </div>

                <div className={style2.about}>
                    <div className={style2.item}>
                    <b>Full name :</b> {createField("Full name", "fullName", [], Input)}
                </div>
                <div className={style2.item}>
                    <b>Looking for a job :</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>

                <div className={style2.item}>
                    <b>My professional skills :</b>
                    {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
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
                <div className={style2.submit}>
                    <input type="submit" value='Save'/>
                    <button name='cancel' onClick={close}>Cancel</button>
                </div>
            </form>
        </div>)
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;