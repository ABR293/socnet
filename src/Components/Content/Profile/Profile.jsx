import React, {useEffect} from 'react';
import style from './Profile.module.css';
import Post from './Post';
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator} from '../../../Utils/Validators/Validators'
import {Textarea} from "../../Common/FormControls/FormControls";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
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


    const onSubmit = (values) => {
        props.addNewPost(values.postText)
    };


    useEffect(() => {
        document.title = props.name;
    });

    let arr1 = Object.keys(props.contacts);
    console.log(arr1);
    return (

        <div className={style.profileBlock}>
            <ProfileInfo
                isOwner={props.isOwner}
                name={props.name}
                avatar={props.avatar}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                contacts={props.contacts}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
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