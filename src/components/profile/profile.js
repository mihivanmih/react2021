import style from './profile.module.css'
import {TimeStudy} from "../timeStudy/timeStudy";
import {Posts} from "../myPosts/myPosts";

export const Profile = (props) => {
    return (
        <div>

            <div className={style.Topimg}>
                <img src="/images/topimg.jpg" alt=""/>
            </div>

            <div className={style.content}>

                <TimeStudy /> <br/> <br/>

                 Мой профиль <br/><br/>

                 <Posts postsData={props.state}  addPost={props.addPost} updateNewPostText={props.updateNewPostText} />



            </div>

        </div>
    );
}