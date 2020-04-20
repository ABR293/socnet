import React, {useState, useEffect} from 'react';
import style from './ProfileStatus.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode]  = useState(false);
    let [status, setStatus]  = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },
        [props.status]
    );

    let changeEditMode = () => {
        editMode ? setEditMode(false) : setEditMode(true)
    };
    let onStatusChange = (element) => {
        setStatus(element.currentTarget.value)
    };
    let UpdateStatus = () => {
        props.updateUserStatus(status);
        changeEditMode();
    };


    return (
        <>
            {editMode ?
                <div className={style.statusInput}>
                    <input
                        autoFocus={true}
                        onBlur={UpdateStatus}
                        defaultValue={status}
                        onChange={onStatusChange}
                    />
                </div>
                :
                <div className={style.statusBlock}
                     onDoubleClick={changeEditMode}
                    >
                    <span>
                        {props.status}
                    </span>
                </div>
            }
        </>
    )};

export default ProfileStatusWithHooks