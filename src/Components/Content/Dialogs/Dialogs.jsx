import React, {Component} from 'react';
import style from './Dialogs.module.css';
import Contact from "./Contact";
import {BrowserRouter, Route} from 'react-router-dom';
import Messages from "./Messages";


export default class Dialogs extends Component {
    render() {
        let Adress = this.props.dialogs.map( (el)=>{
            return(
                <Contact name={el.name}  id={el.id}/>
                )
            }
        );
        let Messedges = this.props.dialogs.map( (el)=>{
                return(
                    <Route path={'/dialogs/'+ el.id} component={() => <Messages messages={el.messages}/>}/>
                )
            }
        );

        return (
            //<BrowserRouter>
            <div className={style.content}>
                <div className={style.header}>Dialogs</div>
                <div className={style.dialogs}>
                    {Adress}
                </div>
                <div className={style.separator}> </div>
                <div className={style.dialog}>
                    {Messedges}
                </div>
            </div>
            //</BrowserRouter>

        )
    }
}

