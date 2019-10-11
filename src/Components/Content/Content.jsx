import React from 'react';
import style from './Content.module.css';
import Dialogs from "./Dialogs";
import {Route} from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import News from "./News";
import Music from "./Music";
import ProfileConteiner from "./Profile/ProfileConteiner";
import DialogsConteiner from "./Dialogs/DialogsConteinet";


const Content =  (props) => {
        return (
                <div className={style.content}>
                    <Route path='/dialogs'
                           render={() => <DialogsConteiner
                               store={props.store}
                               // dialogs={props.state.dialogsPage}

                           />}
                    />
                    <Route path='/profile'
                           render={() => <ProfileConteiner
                               store={props.store}
                           />}
                    />
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>

        )
};
export default Content

