import './Post.css'
import ava from "../../../assets/images/ava.webp";

export const Post = (props) => {
    return (
        <div className="item">
            <div className="img"><img src={ava} alt=""/></div>
            <div className="text">{props.message }</div>
            <div className="like">{props.like } like</div>
        </div>
    );
}