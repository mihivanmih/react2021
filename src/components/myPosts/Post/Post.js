import './Post.css'

export const Post = (props) => {
    return (
        <div className="item">
            <div className="img"><img src="/images/ava.webp" alt=""/></div>
            <div className="text">{props.message }</div>
            <div className="like">{props.like } like</div>
        </div>
    );
}