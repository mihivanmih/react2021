import './myPosts.css'
import {Post} from "./Post/Post";

export const Posts = () => {

    let postsData = [
        {id: 1, message: 'Как дела?', like: 5},
        {id: 2, message: 'Чем занят?', like: 15},
        {id: 3, message: 'Займи 5000?', like: 2},
        {id: 4, message: 'Отдам через неделю', like: 0},
    ]

    let newPostsData = postsData.map(post =>(<Post message={post.message} like={post.like} />))

    return (
        <div>
            Мои посты

            <div>Новый пост</div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Отправить</button>
            {newPostsData}
        </div>
    );
}