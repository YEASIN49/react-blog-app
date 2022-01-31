import React from 'react';
import thumbnail from '../images/thumbnail.jpeg';
import '../css/fullArticle.css';
import { MdDelete } from "react-icons/md";
import { BiEdit } from 'react-icons/bi';

const FullArticle = () => {
	return (
		<div className='fullArticleWrapper'>
			<div className='fullArticleContainer'>
				<div className='fullArticleThumbnailContainer'>
					<img className='fullArticleThumbnail' src={thumbnail} />
					{/*
						<div className='fullArticleActionLogo'>
						<span className='fullArticleActionBtn edit'><BiEdit /></span>
						<span className='fullArticleActionBtn delete'><MdDelete /></span>
					</div>
					*/}
				</div>
				<div className='fullArticleBody'>
					<h1 className='articleTitle'>Title of the article here</h1>
					<div className='authorDetail'>
						<span>Author : MD. Yeasin Ali</span>
						<span className='postedDate'>Posted: 30-01-22</span>

					</div>
					<p className='fullArticle'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
						molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
						numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
						optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
						obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
						nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
						tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
						quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
						sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
						recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
						minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,

						<p className='subSection'>Molestiae quas vel sint commodi repudiandae ?</p>
						molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
						numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
						optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
						obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
						nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
						tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
						quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
						sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
						recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
						minima nesciunt dolorem! Officiis iure rerum voluptates Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Maxime mollitia,
						<br /><br />
						molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
						numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
						optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
						obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
						nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
						tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
						quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
						sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
						recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
						minima nesciunt dolorem! Officiis iure rerum voluptates
					</p>
				</div>
			</div>
		</div>
	)
}

export default FullArticle;