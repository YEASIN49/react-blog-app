import React from "react";
import '../css/categoryCard.css';
// import thumbnail from '../images/thumbnail.jpeg';

const CategoryCard = (props) => {
	return (

		<div className="categoryCardContainer">
			<span className="categoryCard">{props.category}</span>
		</div>
	);
}

export default CategoryCard;