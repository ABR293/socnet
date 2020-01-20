import React from 'react';
import style from './Profile.module.css';
import Post from './Post';
import noAvatar from '../../../img/NA2.gif'
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator} from '../../../Utils/Validators/Validators'
import {Textarea} from "../../Common/FormControls/FormControls";
import ProfileStatusWithHooks from "./ProfileStatusHOOK";
import {Contacts} from "./Contacts";
//import {Contacts} from "./Contacts"

const maxlength50 = maxlengthCreator(50);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='postText'
                placeholder='Add new post...'
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
    let Posts = props.posts.map((post) => {
        return (
            <Post key={post.id} text={post.message}/>
        );
    });

    const onMainPhotoSelected = (element) => {
        element.target.files.length && props.savePhoto(element.target.files[0]);
    };

    const onSubmit = (values) => {
        props.addNewPost(values.postText)
    };




    let arr1 = Object.keys(props.contacts);
    console.log(arr1);
    return (

        <div className={style.profileBlock}>
            <div className={style.info}>
                <img
                    className={style.avatar}
                    src={props.avatar === null ? noAvatar : props.avatar} alt="NICHT AVATAREN!!!"
                />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/> }
                <div className={style.name}>
                    <h3>{props.name}</h3>
                </div>
                <div className={style.status}>
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    />
                </div>
                <div className={style.info}>
                    <div>

                    </div>
                    <h3>About Me:</h3>
                    <p>{props.aboutMe}</p>
                    <h3>Locking for a job:{props.lookingForAJob}</h3>
                    {props.lookingForAJob && <div>props.lookingForAJobDescription</div>}
                    <div className={style.contactsBlock}>
                        <div className={style.contactsList}>
                            <h2>Contacts:</h2>
                            {arr1.map(key => {
                                return(<div key={key}><b>{key}:</b><p>{props.contacts[key]}</p></div>)
                            })}

                        </div>
                    </div>
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