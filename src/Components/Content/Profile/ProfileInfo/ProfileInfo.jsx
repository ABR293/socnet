import React, {useState} from 'react';
import style from "./Profileinfo.module.css";
import noAvatar from "../../../../img/NA2.gif";
import ProfileStatusWithHooks from "./../ProfileStatusHOOK";
import ProfileDataForm from "./ProfileDataForm";
import Modal from "../../../Common/ModalWindow/ModalWindow";
import ReactDOM from "react-dom";

const ProfileInfo = (props) => {
    console.log(props);
    let profile = {...props};

    let onSubmit = (formData) =>{console.log(formData); debugger};

    let [editMode, setEditMode]  = useState(false);
    let changeEditMode = () => {
        editMode ? setEditMode(false) : setEditMode(true)};

    let [isEditlOpen, setEditOpen] = useState(false);

    let toggleEdit = () => {setEditOpen(!isEditlOpen)};

    return(
        <div className={style.info}>
            <div>
                {isEditlOpen && ReactDOM.createPortal(
                    <Modal>
                       <ProfileDataForm
                           onSubmit={onSubmit}
                           initialValues={profile}
                           profile={profile}
                           close={toggleEdit}
                           saveProfile={props.saveProfile}
                       />
                    </Modal>
                    ,
                    document.body
                )}
            </div>
            <div className={style.avatar}>
                <img src={props.avatar === null ? noAvatar : props.avatar} alt="NICHT AVATAREN!!!"/>
            </div>
            <div className={style.edit}>{props.isOwner && <button onClick={toggleEdit}>Edit Profile</button>}</div>
            <div className={style.name}>
                <h3>{props.name}</h3>
            </div>
            <div className={style.status}>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
            <div className={style.infoData}>
                {props.aboutMe && <div className={style.aboutMe}>
                    <h3>About Me:</h3>
                    <p>{props.aboutMe}</p>
                </div>}
                <div className={style.lookingForAJob}>
                    <h3>Locking for a job:{props.lookingForAJob}</h3>
                    {props.lookingForAJob && <div>props.lookingForAJobDescription</div>}
                </div>

                <div className={style.contactsBlock}>
                    <div className={style.contactsList}>
                        <h2>Contacts:</h2>
                        {Object.keys(props.contacts).map(key => {
                            return(props.contacts[key] && <div key={key}><b>{key}:</b><p>{props.contacts[key]}</p></div>)
                        })}

                    </div>
                </div>
            </div>
        <div>

        </div>
        </div>
    )
};
export default ProfileInfo;


{/*<input type="file" onChange={onMainPhotoSelected}/>*/}