import React from 'react';
import style from './Profile.module.css';
import Post from './Post';
import noAvatar from '../../../img/NA2.gif'
//import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator} from '../../../Utils/Validators/Validators'
import {Textarea} from "../../Common/FormControls/FormControls";
import ProfileStatusWithHooks from "./ProfileStatusHOOK";

const maxlength50 = maxlengthCreator(50);

const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='postText'
                placeholder= 'Add new post...'
                validate={[maxlength50]}
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
        let Posts = props.posts.map((post) =>{
            return(
                <Post key={post.id} text={post.message}/>
            );
        });

        const onSubmit = (values) => {props.addNewPost(values.postText)};
        console.log(props.contacts);
        return (

            <div className={style.profileBlock}>
                <div className={style.info}>
                    <img
                        className={style.avatar}
                        src={props.avatar === null ? noAvatar : props.avatar} alt="NICHT AVATAREN!!!"
                    />
                    <div className={style.name}>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={style.status}>
                        <ProfileStatusWithHooks
                            status={props.status}
                            updateUserStatus={props.updateUserStatus}
                        />
                    </div>
                    <div className={style.contactsBlock}>

                        {!props.contacts ? null :
                            <div className={style.contactsList}>
                                {props.contacts.website = null ? <a href={props.contacts.website}> </a> : null}
                                {props.contacts.vk = null ? <a href={props.contacts.vk}> </a> : null}
                                {props.contacts.facebook = null ? <a href={props.contacts.facebook}> </a> : null}
                                {props.contacts.instagram = null ? <a href={props.contacts.instagram}> </a> :
                                    null}
                                {props.contacts.twitter = null ? <a href={props.contacts.twitter}> </a> : null}
                                {props.contacts.website = null ? <a href={props.contacts.website}> </a> : null}
                                {props.contacts.youtube = null ? <a href={props.contacts.youtube}> </a> : null}
                                {props.contacts.mainLink = null ? <a href={props.contacts.mainLink}> </a> : null}
                            </div>}
                    </div>
                </div>

                <div className={style.newPost}>
                    <PostReduxForm onSubmit={onSubmit}/>
                </div>
                <div className='3'>
                    {Posts}
                </div>
            </div>
        )

};
export default Profile;