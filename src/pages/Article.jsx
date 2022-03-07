import React from 'react';
import { useLocation } from 'react-router-dom';
import FullArticle from '../components/FullArticle';
import RecentArticle from '../components/RecentArticle';
import '../css/fullArticle.css'

const Article = () => {
	const location = useLocation();
	
	const postUrl = location.pathname.slice().split("/");
	const postId = postUrl[postUrl.length - 1];
	

	return (
		<div>
			<div className='FullArticlePage'>
				<FullArticle postId={postId} />
				<RecentArticle />
			</div>
		</div>
	);
}
export default Article;