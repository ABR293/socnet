import React from 'react';
import style from './Profile.module.css';
import Post from './Post';




const Profile = (props) => {
        let Posts = props.posts.map((post) =>{
            return(
                <Post key={post.id} text={post.message}/>
            );
        });

        let newPostText = React.createRef();
        let text = props.PostText;


        return (


            <div>
                <div className={style.info}>
                    <img className={style.avatar}
                         src={require("./s111200.png")} alt="NICHT AVATAREN!!!"/>
                    <h1 className={style.name}>{props.name}</h1>
                </div>
                <div className={style.newPost}>
                    <textarea
                        ref={newPostText}
                        onChange={() => {let text = newPostText.current.value; props.changeText(text);}}
                        className={style.newPost__inputblock}
                        value={props.PostText}/>

                    <button
                        onClick={() =>  {props.addPost(text)}}
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