import React from 'react'
import style from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userApi} from "../../api/api";
import {Button} from "antd";
import {Testunfollow} from "../../redux/userReducer";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i=1; i<= pagesCount; i++ ){
        if(i>20) break;
        pages.push(i)
    }



    return (
        <div>
            Пользователи: <br/><br/>
            <div className={style.pagination}>

                {
                    pages.map(pag => {
                        return <span onClick={ (e) => { props.onPageClick(pag)}  } className={props.currentPage === pag && style.bold}>{pag}</span>
                    })
                }

            </div>


            <div>Всего страниц: { pagesCount }</div>
            {
                props.users.map(user => <div className={style.block} key={user.id}>
                        <div className={style.buttonFriends}>
                            { user.followed ? <Button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                                    props.deleteUsersThunk(user.id)
                            }
                            } > UnFollow </Button> : <Button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                                    props.postUsersThunk(user.id)
                               }
                            } > Follow </Button>}
                        </div>
                        <div className={style.userprofile}>
                            <NavLink to={ '/profile/'+ user.id }><div className={style.avatar}>{user.photos.small === null ? <img src="/images/avanone.webp" alt=""/> : <img src={user.photos.small} alt=""/>}</div></NavLink>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            {/*<div>{user.location.city}</div>
                        <div>{user.location.country}</div>*/}
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Users;