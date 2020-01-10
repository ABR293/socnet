import React, {Suspense} from 'react';
import style from './Content.module.css';
import {Route} from "react-router-dom";
import Preloader from "../Common/Preloader";
// import Settings from "./Settings";
// import News from "./News";
// import Music from "./Music";
// import ProfileConteiner from "./Profile/ProfileConteiner";
// import DialogsConteiner from "./Dialogs/DialogsConteinet";
// import UsersConteiner from "./Users/UsersConteiner";
// import Login from "./Login";

const ProfileConteiner = React.lazy(() => import("./Profile/ProfileConteiner"));
const DialogsConteiner = React.lazy(() => import("./Dialogs/DialogsConteinet"));
const UsersConteiner = React.lazy(() => import("./Users/UsersConteiner"));
const Login = React.lazy(() => import("./Login"));
const Music = React.lazy(() => import("./Music"));
const News = React.lazy(() => import("./News"));
const Settings = React.lazy(() => import("./Settings"));

const Content = () => {
    return (
        <div className={style.content}>
            <Route path='/dialogs'
                   render={() => <Suspense fallback={<div><Preloader/></div>}><DialogsConteiner/></Suspense>}
            />
            <Route path='/profile/:userId?'
                   render={() => <Suspense fallback={<Preloader/>}><ProfileConteiner/></Suspense>}
            />
            <Route path='/news'
                   render={() => <Suspense fallback={<Preloader/>}><News/></Suspense>}
            />
            <Route path='/music'
                   render={() => <Suspense fallback={<Preloader/>}><Music/></Suspense>}
            />
            <Route path='/settings'
                   render={() => <Suspense fallback={<Preloader/>}><Settings/></Suspense>}
            />
            <Route path='/users'
                   render={() => <Suspense fallback={<Preloader/>}><UsersConteiner/></Suspense>}
            />
            <Route path='/login'
                   render={() =>  <Suspense fallback={<Preloader/>}><Login/></Suspense>}
            />
        </div>

    )
};
export default Content

