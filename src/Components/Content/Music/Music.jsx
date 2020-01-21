import React, {Component, useEffect} from 'react';
//import style from './Music.module.css';


const Music = () => {

    useEffect(() => {
        document.title = `Music`;
    });

    return (

        <div>
            <p>ТУТ БУДЕТ МУЗЫКА</p>
            <button onClick={() => alert('ЕБААААТЬЬЬ!!! я та самя кнопочка!!! вы меня нашли!!!')}> Кнопочка!</button>
        </div>
    )
};

export default Music