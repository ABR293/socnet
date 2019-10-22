import React from 'react';
import style from "./preloader.module.css";
import preloader from "../../../img/fetching2.gif";




const Preloader = (props) =>{
    return(
        <div className={style.fetchingBlock}>
            <img className={style.fetching} src={preloader} alt="Loading"/>
        </div>
        )

};

export default Preloader;
