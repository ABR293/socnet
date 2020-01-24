import React from "react";
import style from "./Photo.module.css";
import noAvatar from "../../../../../img/NA2.gif";
import {useState} from "react";


const PhotoAvatar = (props) =>{

    let [photo, setPhoto]  = useState(false);
    let [photoURL, setPhotoURL] = useState(props.avatar);
    let [editMode, setEditMode] = useState(false);
    let toggleEditMode = () => setEditMode(!editMode);

    const onMainPhotoSelected = (element) => {
        if (element.target.files.length){
            setPhotoURL(URL.createObjectURL(element.target.files[0]));
            setPhoto(element.target.files[0]);
        }
    };
    let savePhotoZAGL = (photo) => {console.log(photo)};
    const onSavePhoto = () => {
        savePhotoZAGL(photo);
        //props.savePhoto(photo);
        photoEl.current.value = null;
        toggleEditMode();
    };

    let photoEl = React.createRef();
    const onCancelSavePhoto = () => {
        setPhotoURL(props.avatar);
        photoEl.current.value = null;
        toggleEditMode();
    };

    return (
        <>
            {!editMode
                ?
                <div className={style.block}>
                    <img src={photoURL === null ? noAvatar : photoURL} alt="NICHT AVATAREN!!!"/>
                    <div className={style.block__btn}>
                        <button onClick={toggleEditMode}>Change Photo</button>
                    </div>
                </div>
                :
                <div className={style.block2}>
                    <img src={photoURL === null ? noAvatar : photoURL} alt="NICHT AVATAREN!!!"/>
                    <div className={style.menu}>
                        <div className={style.menu__file}>
                            Выберите файл
                            <input
                                type="file"
                                name='photo'
                                ref={photoEl}
                                onChange={onMainPhotoSelected}
                            />
                        </div>
                        <button className={style.menu__yes} onClick={onSavePhoto}>OK</button>
                        <button className={style.menu__no} onClick={onCancelSavePhoto}>Cancel</button>
                    </div>
                </div>
            }
        </>
    )
};
export default PhotoAvatar;