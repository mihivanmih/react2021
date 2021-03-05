import React from 'react'
import {followAC, unfollowAC} from "../../redux/userReducer";
import * as axios from 'axios'
import style from './users.module.css'

export const Users = (props) => {

    let getUsers = () => {

        if(props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(response => {
                props.setUsers(response.data.items)
            })
        }

    }

    return(
        <div>
            Пользователи: <br/><br/>

            <button onClick={getUsers}>getUsers</button>

            {
                props.users.map(user => <div key={user.id}>
                    <div>
                        { user.followed ? <button onClick={ () => { props.unfollow(user.id)} } > UnFollow </button> : <button onClick={ () => { props.follow(user.id)} }> Follow </button>}
                    </div>
                    <div>
                        <div>{user.photos.small === null ? <img src="/images/avanone.webp" alt=""/> : <img src={user.photos.small} alt=""/>}</div>
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

