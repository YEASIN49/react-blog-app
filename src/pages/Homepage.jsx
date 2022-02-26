import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Posts from '../containers/Posts'
import Category from '../containers/Category'
import '../css/home.css'
import axios from "axios";


export default function Homepage() {

	const [allPost, setAllPost] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get("/posts")
			console.log("Inside fetchPosts of Homepage.jsx");
			// console.log(response.data);
			setAllPost(response.data);
		}
		fetchPosts();
	}, []);

	return (
		<div>
			<Hero />
			<Category />
			<Posts allPost={allPost} />
		</div>
	);
}