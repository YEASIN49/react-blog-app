import React, { useContext, useEffect, useRef, useState } from 'react';
import thumbnail from '../images/thumbnail.jpeg';
import { BiImageAdd } from "react-icons/bi";
import '../css/articleCreation.css';
import { Context } from '../Context/Context';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ArticleCreation = () => {

	// const [title, setTitle] = useState("");
	// const [description, setDescription] = useState("");
	const [photo, setPhoto] = useState(null);
	const [onEditMode, setOnEditMode] = useState(false);
	const [EditId, setEditId] = useState();
	const [photoUrl, setPhotoUrl] = useState();
	
	const titleRef = useRef();
	const descriptionRef = useRef();
	const categoryRef = useRef();
	
	const linkParams = useLocation();
	

	useEffect(() => {
		if(linkParams.state){
			setOnEditMode((prevState) => prevState = linkParams.state.editMode);
			setEditId((prevState) => prevState = linkParams.state.postId);	
			setPhotoUrl((prevState) => prevState = linkParams.state.photoUrl);	
			descriptionRef.current.value = linkParams.state.postDescription;
			titleRef.current.value = linkParams.state.postTitle;
		}
	},[]);

	console.log("category === >");
	
	
	const {user} = useContext(Context);
	// console.log(user)

	const convertCategory = async (str) => {
		let generatedCategory = str.split(",");
		return generatedCategory.map(item => {return item.trim().replace(/\s+/g, ' ').toLowerCase()});

	} 
	// UPDATE PHOTO INFORMATION
	const photoInfoAdder = (photoData, newPost, photo) => {
		const filename = `${photo.name}`;
		photoData.append("filename", filename);
		photoData.append("post_photo", photo);
		newPost.photo = filename;
	}

	// UPDATE PREVIOUS ARTICLE
	const updatePostHandler = async (event) => {
		event.preventDefault();
		const newPost = {
			username: user.username,
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			// categories: await convertCategory(categoryRef.current.value) 
		};
		if(photo){
			let photoData = new FormData(); 
			photoInfoAdder(photoData, newPost, photo);

			try {
				await axios.post("/upload", photoData);
			} catch (error) {
				console.log(error);
			}
		}
		try {
			console.log(newPost);
			const response = await axios.put(`/posts/${EditId}`, newPost);
			console.log(response);
			window.location.replace("/article/"+response.data._id)
		} catch (error) {
			console.log(error);
		}
	}

	

	// POST A NEW ARTICLE
	const submitPostHandler = async (event) =>{
		event.preventDefault();
		
		const newPost = {
			username: user.username,
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			categories: await convertCategory(categoryRef.current.value) 
		};
		
		
		if(photo){
			let photoData = new FormData(); 
			// const filename = `${photo.name}`;
			photoInfoAdder(photoData, newPost, photo);

			try {
				await axios.post("/upload", photoData);
			} catch (error) {
				console.log(error);
			}
			try {
				console.log(newPost);
				const response = await axios.post("/posts", newPost);
				console.log(response);
				window.location.replace("/article/"+response.data._id)
			} catch (error) {
				console.log(error);
			}
		}
	}

	return (
		<div className='postingWrapper'>
			<div className='postingContainer'>
				<div className='postImageContainer'>
					{
						photo ? 
						<img className='postingImage' src={URL.createObjectURL(photo)} />
						:
						<img className='postingImage' src={photoUrl ? photoUrl : thumbnail} />
					}
				</div>
				
				<form className='postingForm' 
				onSubmit={onEditMode ? updatePostHandler : submitPostHandler} 
				encType="multipart/form-data">
					<div className='formGroup'>
						<label htmlFor="inputFile">
							<span className='imageIconContainer'>
								<BiImageAdd className='imageAddIcon' />
								<span>
									Add Image
								</span>
							</span>
						</label>
						<input type="file" id="inputFile" style={{ display: "none" } } name="post_photo" onChange={event => setPhoto(prevState => prevState = event.target.files[0])}/>
						<input ref={titleRef} type="text" placeholder='Write Your Title...' className='titleText' />
						<input ref={categoryRef} type="text" className='' placeholder='Enter Category seperated by using comma'></input>
						&nbsp;&nbsp;&nbsp;<textarea ref={descriptionRef} className='postArticle' placeholder='Write your thoughts...' type="text" rows="20">

						</textarea>
						<button className='publishButton'>{onEditMode ? "Update" : "Publish" }</button>
					</div>
				</form>
			</div >
		</div >
	)
}
export default ArticleCreation;