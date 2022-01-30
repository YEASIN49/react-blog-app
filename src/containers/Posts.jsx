import React from "react";
import Post from '../components/Post'
import '../css/home.css'
import partialVariable from '../scss/partials/_variables.scss'



const Posts = () => {
	console.log(partialVariable.colorTitle);
	return (
		<div className="allPostWrapper">
			<h1 className="sectionTitle">All Articles</h1>
			<div className="allPostContainer">
				<Post bgColor={partialVariable.colorCartPink} />
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
				<Post bgColor={partialVariable.colorCartGreen} />
			</div>
		</div>
	);
}

export default Posts;