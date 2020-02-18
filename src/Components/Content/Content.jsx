import React, {Suspense} from 'react';
import style from './Content.module.css';
import {Route} from "react-router-dom";
import Preloader from "../Common/Preloader";
// import Settings from "./Settings";
// import News from "./News";
// import Music from "./Music";
// import ProfileContainer from "./Profile/ProfileContainer";
// import DialogsContainer from "./Dialogs/DialogsContainer";
// import UsersContainer from "./Users/UsersContainer";
// import Login from "./Login";

const ProfileContainer = React.lazy(() => import("./Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Login = React.lazy(() => import("./Login"));
const Music = React.lazy(() => import("./Music"));
const News = React.lazy(() => import("./News"));
const Settings = React.lazy(() => import("./Settings"));

const Content = () => {
    return (
        <div className={style.content}>
            <Route path='/dialogs'
                   render={() => <Suspense fallback={<div><Preloader/></div>}><DialogsContainer/></Suspense>}
            />
            <Route path='/profile/:userId?'
                   render={() => <Suspense fallback={<Preloader/>}><ProfileContainer/></Suspense>}
            />
            {/*<Route path='/news'*/}
                   {/*render={() => <Suspense fallback={<Preloader/>}><News/></Suspense>}*/}
            {/*/>*/}
            {/*<Route path='/music'*/}
                   {/*render={() => <Suspense fallback={<Preloader/>}><Music/></Suspense>}*/}
            {/*/>*/}
            {/*<Route path='/settings'*/}
                   {/*render={() => <Suspense fallback={<Preloader/>}><Settings/></Suspense>}*/}
            {/*/>*/}
            <Route path='/users'
                   render={() => <Suspense fallback={<Preloader/>}><UsersContainer/></Suspense>}
            />
            <Route path='/login'
                   render={() =>  <Suspense fallback={<Preloader/>}><Login/></Suspense>}
            />
        </div>

    )
};
export default Content

