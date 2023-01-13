import React, {useState, useEffect} from 'react'


const ProfileStatusHooks = (props) => {

 //   let [editMode, setEditMode] = useState({editMode: false, status: props.status});
    let [editMode, setEditMode] = useState( false);
    let [status, setStatus] = useState( props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true);
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value )
    }


    return (
        <>
            <div>Мой статус</div>
            <div>
                { !editMode &&
                    <span onDoubleClick={ activeEditMode }>{props.status}</span>
                }
                { editMode &&
                    <input onChange={ onStatusChange }  autoFocus={true} onBlur={ deactivatedEditMode }  type="text" value={ status || "Изменить статус"}/>
                }
            </div>
            <br/><br/>
        </>
    )

}

export default ProfileStatusHooks