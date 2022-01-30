import React from "react";
import '../css/post.css';
import thumbnail from '../images/thumbnail.jpeg'

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
					<h3 className="postTitle">Blockchain and it's singinificant impact on web3.0 era! </h3>
					<div className="authorInfoContainer">
						<span className="postAuthor">Author : MD. Yeasin Ali</span>
						<span className="uploadDate">29-01-22</span>
					</div>
					<p className="postShortDescription">
						Blockchain will be the new era of decentralized web computing. Blockchain will be the new era of decentralized web computing. Blockchain will be the new era of decentralized web computing. Blockchain will be the new era of decentralized web computing......
						{/*<a className="readMoreLink" href="">Read More....</a>*/}
					</p>
					<a href="" className="readButton">Read Full Article</a>
					<br />
				</div>
			</div>
		</div>
	);
}

export default Post;