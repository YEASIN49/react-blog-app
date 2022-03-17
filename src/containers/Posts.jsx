import React from "react";
import Post from '../components/Post'
import '../css/home.css'
import partialVariable from '../scss/partials/_variables.scss'



const Posts = (props) => {
	
	const fetchedPost = props.allPost.slice();
	
	
	return (
		<div ref={props.referenceProp} id="allPostSection" className="allPostWrapper">
			<h1 className="sectionTitle">All Articles</h1>
			<div className="allPostContainer">
				{fetchedPost.map((post) => (
					<Post
						bgColor={partialVariable.colorLightOrange}
						postContent={post}
						key={post._id}
					/>
				))}
				{/*<Post bgColor={partialVariable.colorCartPink} />
				<Post bgColor={partialVariable.colorLightOrange} />
				<Post bgColor={partialVariable.colorLightBrown} />
				<Post bgColor={partialVariable.colorLightGray} />
				<Post bgColor={partialVariable.colorCartPink} />
				<Post bgColor={partialVariable.colorCartGreen} />
				<Post bgColor={partialVariable.colorLightOrange} />
				<Post bgColor={partialVariable.colorLightBrown} />
				<Post bgColor={partialVariable.colorCartPink} />
				<Post bgColor={partialVariable.colorCartGreen} />
				<Post bgColor={partialVariable.colorLightOrange} />
				<Post bgColor={partialVariable.colorLightGray} />
				<Post bgColor={partialVariable.colorLightBrown} />
				<Post bgColor={partialVariable.colorLightGray} />
				<Post bgColor={partialVariable.colorCartGreen} />
		<Post bgColor={partialVariable.colorCartGreen} /> */}
			</div>
		</div>
	);
}

export default Posts;