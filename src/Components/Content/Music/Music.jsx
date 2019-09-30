import React, {Component} from 'react';
import style from './Music.module.css';


export default class Music extends Component {
    render() {
        return (
            <div>
                <p>ТУТ БУДЕТ МУЗЫКА</p>
                <button onClick={()=> alert('ЕБААААТЬЬЬ!!! я та самя кнопочка!!! вы меня нашли!!!')}> Кнопочка! </button>
            </div>
        )
    }
}