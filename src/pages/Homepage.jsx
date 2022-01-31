import React from 'react';
import Hero from '../components/Hero';
import Posts from '../containers/Posts'
import Category from '../containers/Category'
import '../css/home.css'


export default function Homepage() {
	return (
		<div>
			<Hero />
			<Category />
			<Posts />
		</div>
	);
}