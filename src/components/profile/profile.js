import style from './profile.module.css'
import {TimeStudy} from "../timeStudy/timeStudy";
import {Posts} from "../myPosts/myPosts";
import {MyPostsContainer} from "../myPosts/myPostsContainer";
import ProfileStatus from "./profileStatus";

export const Profile = (props) => {

    return (
        <div>

            <div className={style.Topimg}>
                <img src="/images/topimg.jpg" alt=""/>
            </div>

            <div className={style.content}>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

                <TimeStudy /> <br/> <br/>

                 Мой профиль <br/><br/>

                 <MyPostsContainer profile={props.profile}/>

            </div>

        </div>
    );
}
