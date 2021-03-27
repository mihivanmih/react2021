import React from 'react'
import style from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userApi} from "../../api/api";
import {Button} from "antd";
import {Testunfollow} from "../../redux/userReducer";
import {Paginator} from "../Paginator/paginator";
import User from "./user";

let Users = ({currentPage, totalUsersCount, pageSize, onPageClick, followingInProgress, deleteUsersThunk, postUsersThunk, ...props}) => {

    return (
        <div>
            Пользователи: <br/><br/>
            <div className={style.pagination} >

       {/*         {
                    pages.map(pag => {
                        return <span onClick={ (e) => { props.onPageClick(pag)}  } className={props.currentPage === pag && style.bold}>{pag}</span>
                    })
                }*/}

                <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} onPageClick={onPageClick} pageSize={pageSize} />

            </div>

            {
                props.users.map(user => <User user={user} key={user.id} followingInProgress={followingInProgress} deleteUsersThunk={deleteUsersThunk} postUsersThunk={postUsersThunk} />)
            }

        </div>
    )
}

export default Users;