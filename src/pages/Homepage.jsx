import React, { useEffect, useState, useRef } from 'react';
import Hero from '../components/Hero';
import Posts from '../containers/Posts'
import Category from '../containers/Category'
import '../css/home.css'
import { useLocation } from 'react-router-dom';
import axios from "axios";


export default function Homepage(props) {

	const [allPost, setAllPost] = useState([]);
	const querySearch = useLocation().search;
	const postSectionRef = useRef();

	const scrollToComponent = (ref) => window.scrollTo({
		left: 0, 
		top: ref.current.offsetTop,
		behavior: 'smooth'
	  });

	const publicImage = "http://localhost:5000/images/";

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get("/posts" + querySearch)
			
			setAllPost(response.data);
		}
		fetchPosts();
	}, [querySearch]);

	return (
		<div ref={props.referenceProp}>
			<Hero />
			<Category click={() => scrollToComponent(postSectionRef)}/>
			<Posts allPost={allPost} referenceProp={postSectionRef}/>
		</div>
	);
}