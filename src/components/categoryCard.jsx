import React from "react";
import '../css/categoryCard.css';
import { Link } from "react-router-dom";
// import thumbnail from '../images/thumbnail.jpeg';

const CategoryCard = (props) => {
	console.log("inside CategoryCard" + props.category)
	return (
		<div className="categoryCardContainer">
			<Link to={`/?category=${props.category}`}>
				<span className="categoryCard">{props.category}</span>
			</Link>
		</div>
	);
}

export default CategoryCard;