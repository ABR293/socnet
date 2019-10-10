import React, {Component} from 'react';
import style from './Profile.module.css';
import Post from './Post';
import {addPostCreator, changeTextCreator} from "../../../Redux/State";




export default class Profile extends Component {
    render() {

        //this.props.addPost('URA!!! URAAeeeee!! URA!!!');





        let Posts = this.props.profile[0].posts.map((post) =>{
            return(
                <Post text={post.message}/>
            );
        });

        let newPostText = React.createRef();
        let AddNewPost = () => {
            let text = this.props.profile[0].PostText;
            this.props.dispatch(addPostCreator(text));
            this.props.dispatch(changeTextCreator(''));
            //this.props.addPost(text);
            //this.props.changePostText('');
        };

        let onPostChange = ()=>{
            let text = newPostText.current.value;
            this.props.dispatch(changeTextCreator(text));
            //this.props.changePostText(text);
            console.log(text);

        };

        return (


            <div>
                <div className={style.info}>
                    <img className={style.avatar}
                         src={require("./s111200.png")}
                         alt="NICHT AVATAREN!!!"/>
                    <h1 className={style.name}>{this.props.profile[0].name}</h1>
                </div>
                <div className={style.newPost}>
                    <textarea
                        ref={newPostText}
                        onChange={onPostChange}
                        className={style.newPost__inputblock}
                        value={this.props.profile[0].PostText}/>
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
    }
}