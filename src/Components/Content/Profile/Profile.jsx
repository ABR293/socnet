import React from 'react';
import style from './Profile.module.css';
import Post from './Post';
import noAvatar from '../../../img/Av2.jpg'
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {maxlengthCreator} from '../../../Utils/Validators/Validators'
import {Textarea} from "../../Common/FormControls/FormControls";

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
        return (

            <div>
                <div className={style.info}>
                    <img className={style.avatar}
                         src={props.avatar === null ? noAvatar : props.avatar} alt="NICHT AVATAREN!!!"/>
                    <h1 className={style.name}>{props.name}</h1>
                </div>
                <div>
                    <ProfileStatus
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    />
                </div>
                <div className={style.newPost}>
                    <PostReduxForm  onSubmit = {onSubmit} />

                </div>
                <div className='3'>
                    {Posts}
                </div>
            </div>
        )

};
export default Profile;