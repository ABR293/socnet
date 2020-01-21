import React, {useEffect} from 'react';
//import style from './Settings.module.css';

const Settings = () => {

    useEffect(() => {
        document.title = `Settings`;
    });

    return (
        <div>
            <p>ТУТ БУДУТ НАСТРОЙКИ</p>
        </div>
    )
};

export default Settings


