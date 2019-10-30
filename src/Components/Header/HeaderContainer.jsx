import React from 'react';
import Header from "./Header";
import {authentication, setAuthUserData} from "../../Redux/AuthReducer";
import connect from "react-redux/es/connect/connect";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authentication()
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
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});

export default connect(mapStateToProps, {setAuthUserData, authentication})(HeaderContainer);


