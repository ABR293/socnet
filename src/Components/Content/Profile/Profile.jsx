import React from 'react';
import style from './Profile.module.css';
import Post from './Post';
import noAvatar from '../../../img/Av2.jpg'
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";


const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field
                component='textarea'
                name='postText'
                placeholder= 'Add new post...'
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

        //let newPostText = React.createRef();
        //let text = props.PostText;

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
                    <PostReduxForm  onSubmit = {onSubmit}/>
                    {/*<textarea
                        ref={newPostText}
                        onChange={() => {let text = newPostText.current.value; props.changePostText(text);}}
                        className={style.newPost__inputblock}
                        value={props.PostText}/>

                    <button
                        onClick={() => {props.addNewPost(text)}}
                        className={style.newPost__add}>
                        Add Post
                    </button>*/}
                </div>
                <div className='3'>
                    {Posts}
                </div>
            </div>
        )

};
export default Profile;