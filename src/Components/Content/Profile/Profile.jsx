import React from 'react';
import style from './Profile.module.css';
import Post from './Post';
import {addPostCreator, changeTextCreator} from "../../../Redux/State";




const Profile = (props) => {
        let Posts = props.profile.posts.map((post) =>{
            return(
                <Post text={post.message}/>
            );
        });

        let newPostText = React.createRef();
        let AddNewPost = () => {
            let text = props.profile.PostText;
            props.dispatch(addPostCreator(text));
            props.dispatch(changeTextCreator(''));
            //props.addPost(text);
            //props.changePostText('');
        };

        let onPostChange = ()=>{
            let text = newPostText.current.value;
            props.dispatch(changeTextCreator(text));
            //props.changePostText(text);
            console.log(props.profile.PostText);

        };

        return (


            <div>
                <div className={style.info}>
                    <img className={style.avatar}
                         src={require("./s111200.png")} alt="NICHT AVATAREN!!!"/>
                    <h1 className={style.name}>{props.profile.name}</h1>
                </div>
                <div className={style.newPost}>
                    <textarea
                        ref={newPostText}
                        onChange={onPostChange}
                        className={style.newPost__inputblock}
                        value={props.profile.PostText}


                    />

                    <button
                        onClick={AddNewPost}
                        className={style.newPost__add}>
                        Add Post
                    </button>
                </div>
                <div className='3'>
                    {Posts}
                </div>
            </div>
        )

};
export default Profile;