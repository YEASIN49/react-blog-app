import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/categoryCard";
import '../css/category.css';
// import thumbnail from '../images/thumbnail.jpeg';

const Category = () => {
	const [allCategory, setAllCategory] = useState([]);

	useEffect(() => {
		const fetchAllCategory = async () => {
			const response = await axios.get("/categories");
			setAllCategory((prevState) => prevState = response.data);
		}
		fetchAllCategory();
	}, []);

	return (
		<div id="categorySection" className="categoryWrapper">
			<div className="categoryContainer">
				<div className="categoryContainer">
					<h3 className="categorySectionHeader">Read By Category</h3>
					{/*
						<img className="categoryThumbnail" src={thumbnail} />
					*/}
					<div className="categoryCardWrapper">
						{allCategory.map((category) => (
							<CategoryCard
								key={category._id}
								category={category.name}
							/>
						))}
						{/*
							<CategoryCard category={"FRONTEND"} />
							<CategoryCard category={"BACKEND"} />
							<CategoryCard category={"PROGRAMMING"} />
							<CategoryCard category={"SOFTWARE"} />
							<CategoryCard category={"IOT"} />
							<CategoryCard category={"RISING TECH"} />
						*/}

					</div>
				</div>
			</div>
		</div>
	);
}

export default Category;