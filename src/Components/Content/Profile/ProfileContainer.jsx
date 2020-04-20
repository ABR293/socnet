import React from 'react';
import Profile from "./Profile";
import {
    addPost, savePhoto, saveProfile,
    setProfile,
    setUserStatus,
    updateUserStatus,
} from "../../../Redux/ProfileReducer";
import connect from "react-redux/es/connect/connect"
import Preloader from "../../Common/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    refrashProfile() {
        let userId;
        !this.props.match.params.userId
            ? userId = this.props.userId
            : userId = this.props.match.params.userId;
        this.props.setProfile(userId);
        this.props.setUserStatus(userId);
    }

    componentDidMount() {
        this.refrashProfile();
    }

    componentDidUpdate(prevProps, prevState,) {
        this.props.match.params.userId !== prevProps.match.params.userId && this.refrashProfile();
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Profile
                        isOwner={!this.props.match.params.userId}
                        posts={this.props.posts}
                        PostText={this.props.PostText}
                        fullName={this.props.fullName}
                        addNewPost={this.props.addNewPost}
                        avatar={this.props.avatar}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}
                        contacts={this.props.contacts}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
                        lookingForAJob={this.props.lookingForAJob}
                        lookingForAJobDescription={this.props.lookingForAJobDescription}
                        aboutMe={this.props.aboutMe}

                    />}
            </>
        );
    }

}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        PostText: state.profilePage.PostText,
        fullName: state.profilePage.fullName,
        avatar: state.profilePage.avatar,
        isFetching: state.profilePage.isFetching,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        userId: state.profilePage.userId,
        contacts: state.profilePage.contacts,
        lookingForAJob:  state.profilePage.lookingForAJob,
        lookingForAJobDescription:  state.profilePage.lookingForAJobDescription,
        aboutMe:  state.profilePage.aboutMe,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (text) => {
            dispatch(addPost(text));
        },
        setProfile: (userId) => {
            dispatch(setProfile(userId));
        },
        setUserStatus: (userID) => {
            dispatch(setUserStatus((userID)))
        },
        updateUserStatus: (status) => {
            dispatch(updateUserStatus(status))
        },
        savePhoto: (photo) => {
            dispatch(savePhoto(photo));
        },
        saveProfile: (profile) => {
            dispatch(saveProfile(profile));
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter, WithAuthRedirect,
)(ProfileContainer);




