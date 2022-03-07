import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Posts from '../containers/Posts'
import Category from '../containers/Category'
import '../css/home.css'
import { useLocation } from 'react-router-dom';
import axios from "axios";


export default function Homepage() {

	const [allPost, setAllPost] = useState([]);
	const querySearch = useLocation().search;

	const publicImage = "http://localhost:5000/images/";

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get("/posts" + querySearch)
			
			setAllPost(response.data);
		}
		fetchPosts();
	}, [querySearch]);

	return (
		<div>
			<Hero />
			<Category />
			<Posts allPost={allPost} />
		</div>
	);
}