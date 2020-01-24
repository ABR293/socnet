import React, {useEffect, useState} from 'react';
import style from './Profile.module.css';
import Post from './Post';
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator} from '../../../Utils/Validators/Validators'
import {Textarea} from "../../Common/FormControls/FormControls";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//import noAvatar from "../../../img/NA2.gif";
import ProfileForm from "./ProfileInfo/ProfileDataForm";
//import {Contacts} from "./Contacts"


const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='postText'
                placeholder='Add new post...'
                validate={[ maxlengthCreator(50)]}
                className={style.newPost__inputblock}/>

            <button

                className={style.newPost__add}>
                Add Post
            </button>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'newPost'})(PostForm);


const Profile = (props) => {

    useEffect(() => {
        document.title = props.fullName;
    });

    const onSubmit = (values) => {
        props.addNewPost(values.postText)
    };

    let Posts = props.posts.map((post) => {
        return (
            <Post key={post.id} text={post.message}/>
        );
    });

    let [isEditOpen, setEditOpen] = useState(false);

    let toggleEdit = () => {
        setEditOpen(!isEditOpen)
    };
    let profile = {
        fullName: props.fullName,
        lookingForAJob: props.lookingForAJob,
        lookingForAJobDescription: props.lookingForAJobDescription,
        aboutMe: props.aboutMe,
        contacts: props.contacts,
    };
    return (

        <div className={style.profileBlock}>
            {!isEditOpen
                ?
                <>
                    <ProfileInfo
                        isOwner={props.isOwner}
                        fullName={props.fullName}
                        avatar={props.avatar}
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                        contacts={props.contacts}
                        savePhoto={props.savePhoto}
                        saveProfile={props.saveProfile}
                        lookingForAJob={props.lookingForAJob}
                        lookingForAJobDescription={props.lookingForAJobDescription}
                        aboutMe={props.aboutMe}
                        openEdit={toggleEdit}
                    />
                    <div className={style.newPost}>
                        <PostReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div className='3'>
                        {Posts}
                    </div>
                </>
                :
                <ProfileForm
                    profile={profile}
                    close={toggleEdit}
                    saveProfile={props.saveProfile}
                />}
        </div>
    )
};

export default Profile;