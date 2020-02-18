import React from "react";
import {Redirect} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

export const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;

            return (<Component {...this.props}/>)
        }
    }

    let mapStateToPropsFoRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        };
    };

    let ConnectedAuthredirectComponent = connect(mapStateToPropsFoRedirect)(RedirectComponent);

    return ConnectedAuthredirectComponent
};