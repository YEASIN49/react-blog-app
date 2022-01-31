import React from 'react';
import FullArticle from '../components/FullArticle';
import RecentArticle from '../components/RecentArticle';
import '../css/fullArticle.css'

const Article = () => {
	return (
		<div>
			<div className='FullArticlePage'>
				<FullArticle />
				<RecentArticle />
			</div>
		</div>
	);
}
export default Article;