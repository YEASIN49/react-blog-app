import React, { useContext, useEffect, useState } from 'react';
import thumbnail from '../images/thumbnail.jpeg';
import '../css/fullArticle.css';
import { MdDelete } from "react-icons/md";
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from "axios";
import  {Context}  from '../Context/Context';

const FullArticle = (props) => {

	const {user} = useContext(Context);
	
	console.log("outside useeffect")
	console.log(props)

	const [postData, setPostData] = useState("");
	const publicImage = "http://localhost:5000/images/";

	useEffect(() => {
		const fetchPostData = async (postId) => {
			const response = await axios.get(`/posts/${postId}`);
			
			setPostData((prevState) => prevState = response.data);
		}
		fetchPostData(props.postId);
	}, []);
	
	const deletePostHandler = async () => {
		try {
			
			await axios.delete(`/posts/${props.postId}`, {
				data: {username: user.username}
			});
			window.location.replace('/');
		} catch (error) {
		console.log(`Post cannot delete - ${error}`);			
		}
	}
	

	return (
		<div className='fullArticleWrapper'>
			<div className='fullArticleContainer'>
				<div className='fullArticleBody'>
					<h1 className='articleTitle'>{postData.title}</h1>
					<div className='fullArticleThumbnailContainer'>
					{
						postData.photo ?
						<img className="postThumbnail" src={publicImage+postData.photo} />
						:
						<img className="postThumbnail" src={thumbnail} />
					}

					{
						(user != null && user.username === postData.username) ?
						<div className='fullArticleActionLogo'>
							<Link to={`/createArticle`}
								state={
									postData.photo ?
									{ 
										editMode: true,
										postId: postData._id,
										postTitle: postData.title,
										postDescription: postData.description,
										photoUrl: publicImage+postData.photo,
									}
									:
									{ 
										editMode: true,
										postId: postData._id,
										postTitle: postData.title,
										postDescription: postData.description,
										photoUrl: publicImage+"thumbnail.jpeg",
									}
								}
							>
								<span  className='fullArticleActionBtn edit'><BiEdit /></span>
							</Link>
							<span onClick={deletePostHandler} className='fullArticleActionBtn delete'><MdDelete /></span>
						</div>
						:
						""
					}


					</div>
					<div className='authorDetail'>
						<span>Author :
							<Link to={`/?user=${postData.username}`} className="inheritLink">
								<span>{postData.username}</span>
							</Link>
						</span>
						<span className='postedDate'>Posted: {new Date(postData.updatedAt).toDateString()}</span>

					</div>
					<div className='fullArticle'>
						{postData.description}

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
					</div>
				</div>
			</div>
		</div>
	)
}

export default FullArticle;