import React from "react";
import '../css/categoryCard.css';
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
	return (
		<div onClick={props.click} className="categoryCardContainer">
			<Link to={`/?category=${props.category.toLowerCase()}`}>
				<span className="categoryCard">{props.category}</span>
			</Link>
		</div>
	);
}

export default CategoryCard;