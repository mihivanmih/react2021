import style from './profile.module.css'
import {TimeStudy} from "../timeStudy/timeStudy";
import {Posts} from "../myPosts/myPosts";
import {MyPostsContainer} from "../myPosts/myPostsContainer";
import ProfileStatus from "./profileStatus";
import ProfileStatusHooks from "./profileStatusHooks";

export const Profile = ({status, updateStatus, profile}) => {

    return (
        <div>

            <div className={style.topimg}>
                <img src="/images/topimg.jpg" alt=""/>
            </div>

            <div className={style.content}>

                <ProfileStatusHooks status={status} updateStatus={updateStatus} />

                <TimeStudy /> <br/> <br/>

                 Мой профиль <br/><br/>

                 <MyPostsContainer profile={profile}/>

            </div>

        </div>
    );
}
