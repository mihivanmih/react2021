import React from 'react'
import style from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userApi} from "../../api/api";
import {Button} from "antd";
import {Testunfollow} from "../../redux/userReducer";
import {Paginator} from "../Paginator/paginator";

let User = ({user, deleteUsersThunk, postUsersThunk, followingInProgress}) => {

    return (
            <div className={style.block} key={user.id}>
                <div className={style.buttonFriends}>
                    { user.followed ? <Button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
                            deleteUsersThunk(user.id)
                    }
                    } > UnFollow </Button> : <Button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
                            postUsersThunk(user.id)
                       }
                    } > Follow </Button>}
                </div>
                <div className={style.userprofile}>
                    <NavLink to={ '/profile/'+ user.id }><div className={style.avatar}>{user.photos.small === null ? <img src="/images/avanone.webp" alt=""/> : <img src={user.photos.small} alt=""/>}</div></NavLink>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
            </div>
    )
}

export default User;