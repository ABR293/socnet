import React from 'react';
import style from './Content.module.css';
import {Route} from "react-router-dom";
import Settings from "./Settings";
import News from "./News";
import Music from "./Music";
import ProfileConteiner from "./Profile/ProfileConteiner";
import DialogsConteiner from "./Dialogs/DialogsConteinet";
import UsersConteiner from "./Users/UsersConteiner";


const Content = () => {
    return (
        <div className={style.content}>
            <Route path='/dialogs'
                   render={() => <DialogsConteiner/>}
            />
            <Route path='/profile'
                   render={() => <ProfileConteiner/>}
            />
            <Route path='/news'
                   render={() => <News/>}
            />
            <Route path='/music'
                   render={() =><Music/>}
            />
            <Route path='/settings'
                   render={() =><Settings/>}
            />
            <Route path='/users'
                   render={() => <UsersConteiner/>}
            />
        </div>

    )
};
export default Content

