import React from 'react'
import {followAC, unfollowAC} from "../../redux/userReducer";
import * as axios from 'axios'
import style from './users.module.css'

export class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

/*    getUsers = () => {

        if(this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(response => {
                this.props.setUsers(response.data.items)
            })
        }

    }*/

    render() {
        return (
            <div>
                Пользователи: <br/><br/>

                {
                    this.props.users.map(user => <div key={user.id}>
                            <div>
                                { user.followed ? <button onClick={ () => { this.props.unfollow(user.id)} } > UnFollow </button> : <button onClick={ () => { this.props.follow(user.id)} }> Follow </button>}
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
}