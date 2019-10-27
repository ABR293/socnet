import React from 'react';
import Header from "./Header";
import {setAuthUserData} from "../../Redux/AuthReducer";
import connect from "react-redux/es/connect/connect";
import {authAPI} from "../../API/API";


 class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data);
                }
            });
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        )

    }
}
const mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth,
    login: state.authPage.login,

});

export default connect(mapStateToProps, {setAuthUserData} )(HeaderContainer);


