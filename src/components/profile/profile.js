import style from './profile.module.css'
import {Posts} from "../myPosts/myPosts";
import {MyPostsContainer} from "../myPosts/myPostsContainer";
import ProfileStatus from "./profileStatus";
import ProfileStatusHooks from "./profileStatusHooks";
import topimg from "../../assets/images/topimg.jpg";

export const Profile = ({status, updateStatus, profile, isowner, savePhoto, saveProfile}) => {

    return (
        <div>

            <div className={style.topimg}>
                <img src={topimg} alt=""/>
            </div>

            <div className={style.content}>

                <ProfileStatusHooks status={status} updateStatus={updateStatus} />



                 Мой профиль <br/><br/>

                 <MyPostsContainer savePhoto={savePhoto}  saveProfile={saveProfile} isowner={isowner} profile={profile}/>

            </div>

        </div>
    );
}
