import React from 'react';
import style from './Content.module.css';
import Dialogs from "./Dialogs";
import {Route} from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import News from "./News";
import Music from "./Music";
import ProfileConteiner from "./Profile/ProfileConteiner";


const Content =  (props) => {
        return (
                <div className={style.content}>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={props.state.dialogsPage}
                               dispatch={props.dispatch}
                           />}
                    />
                    <Route path='/profile'
                           render={() => <ProfileConteiner
                               store={props.store}
                               profile={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}
                    />
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>

        )
};
export default Content

