import React from "react";
import '../css/post.css';
import thumbnail from '../images/thumbnail.jpeg';
import { Link } from "react-router-dom";

const Post = (props) => {
	return (
		<div className="postWrapper">
			<div style={{ backgroundColor: props.bgColor }} className="postContainer" >
				<div className="postThumbnailContainer">
					<img className="postThumbnail" src={thumbnail} />
				</div>
				<div className="postDescription">
					<span className="postCategory">Category A</span>
					<span className="postCategory">Category B</span>
					<h3 className="postTitle">{props.postContent.title} </h3>
					<div className="authorInfoContainer">
						<span className="postAuthor">Author : {props.postContent.username}</span>
						<span className="uploadDate">{new Date(props.postContent.updatedAt).toDateString()}</span>
					</div>
					<p className="postShortDescription">
						{props.postContent.description}
						{/*<a className="readMoreLink" href="">Read More....</a>*/}
					</p>
					<Link to={`/article/${props.postContent._id}`} className="readButton">
						Read Full Article
					</Link>
					<br />
				</div>
			</div>
		</div>
	);
}

export default Post;