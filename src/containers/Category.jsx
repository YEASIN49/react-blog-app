import React from "react";
import CategoryCard from "../components/categoryCard";
import '../css/category.css';
import thumbnail from '../images/thumbnail.jpeg';

const Category = () => {
	return (
		<div className="categoryWrapper">
			<div className="categoryContainer">
				<div className="categoryContainer">
					<h3 className="categorySectionHeader">Read By Category</h3>
					{/*
						<img className="categoryThumbnail" src={thumbnail} />
					*/}
					<div className="categoryCardWrapper">
						<CategoryCard category={"WEB"} />
						<CategoryCard category={"FRONTEND"} />
						<CategoryCard category={"BACKEND"} />
						<CategoryCard category={"PROGRAMMING"} />
						<CategoryCard category={"SOFTWARE"} />
						<CategoryCard category={"IOT"} />
						<CategoryCard category={"RISING TECH"} />

					</div>
				</div>
			</div>
		</div>
	);
}

export default Category;