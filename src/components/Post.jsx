import React from "react";
import '../css/post.css';
import thumbnail from '../images/thumbnail.jpeg';
import { Link } from "react-router-dom";

const Post = (props) => {

	const publicImage = "http://localhost:5000/images/";
	const shortPostDescription = props.postContent.description.slice(0,170);
	const postShortTitle = props.postContent.title.slice(0,80);

	

	return (
		<div  className="postWrapper" >
			<div style={{ backgroundColor: props.bgColor }} className="postContainer" >
				<div className="postThumbnailContainer">
					{
						props.postContent.photo ?
						<img className="postThumbnail" src={publicImage+props.postContent.photo} />
						:
						<img className="postThumbnail" src={thumbnail} />
					}
				</div>
				<div className="postDescription">
					{
						props.postContent.categories.map((item, index) =>(
							<span key={index} className="postCategory">{item}</span>
						))
					}
					{/* <span className="postCategory">Category A</span> */}
					{/* <span className="postCategory">Category B</span> */}
					<h3 className="postTitle"><span>{`${postShortTitle}...`} </span></h3>
					<div className="authorInfoContainer">
					<span>Author :
							<Link to={`/?user=${props.postContent.username}`} className="inheritLink">
								<span>{props.postContent.username}</span>
							</Link>
						</span>
						<span className="uploadDate">{new Date(props.postContent.updatedAt).toDateString()}</span>
					</div>
					<p className="postShortDescription">
						{`${shortPostDescription}....`}
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