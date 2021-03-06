import React from 'react'
import style from "./users.module.css";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    console.log(pagesCount)
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
                props.users.map(user => <div key={user.id}>
                        <div>
                            { user.followed ? <button onClick={ () => { props.unfollow(user.id)} } > UnFollow </button> : <button onClick={ () => { props.follow(user.id)} }> Follow </button>}
                        </div>
                        <div>
                            <div className={style.avatar}>{user.photos.small === null ? <img src="/images/avanone.webp" alt=""/> : <img src={user.photos.small} alt=""/>}</div>
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