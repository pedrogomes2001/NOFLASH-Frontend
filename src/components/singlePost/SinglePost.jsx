import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src=""          alt=""
        />
        <h1 className="singlePostTitle">
          TITULO
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Autor:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Pedro
              </Link>
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
          TEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTO
          TEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTO  
        </p>
      </div>
    </div>
  );
}
