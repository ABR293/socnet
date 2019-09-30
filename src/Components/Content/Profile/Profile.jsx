import React, {Component} from 'react';
import style from './Profile.module.css';
import Post from './Post';




export default class Profile extends Component {
    render() {

        //this.props.addPost('URA!!! URAAeeeee!! URA!!!');




        console.log(this.props);

        let Posts = this.props.profile[0].posts.map((post) =>{
            return(
                <Post text={post.message}/>
            );
        });

        let newPostText = React.createRef();
        let AddNewPost = () => {
          let text = newPostText.current.value;
          this.props.addPost(text);
          newPostText.current.value = '';
        };

        return (


            <div>
                <div className={style.info}>
                    <img className={style.avatar} src={require("./s111200.png")} alt="NICHT AVATAREN!!!"/>
                    <h1 className={style.name}>{this.props.profile.name}</h1>
                </div>
                <div className={style.newPost}>
                    <textarea ref={newPostText} className={style.newPost__inputblock}> </textarea>
                    <button onClick={AddNewPost} className={style.newPost__add}>Add Post</button>
                </div>
                <div className='3'>
                    {Posts}
                </div>
            </div>
        )
    }
}