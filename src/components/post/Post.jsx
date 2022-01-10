import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
          </span>
          <span className="postCat">
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Titulo post
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        Descrição post
      </p>
    </div>
  );
}
