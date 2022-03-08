import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/profileUpdate.css";
// import profileImg from "../images/user-profile.jpg";
import { BiImageAdd } from "react-icons/bi";
import {Context} from '../Context/Context';
import axios from "axios";

const ProfileUpdate = () => {
	const [onEditMode, setOnEditMode] = useState(false);
	const {user, dispatch} = useContext(Context);
	const [userPhoto, setUserPhoto] = useState(user.profilePicture);
	const defaultImagePath = `http://localhost:5000/images/`;

	const nameRef = useRef();
	const emailRef = useRef();
	console.log(user);
	console.log(userPhoto);
	console.log(typeof(userPhoto));
	const userName = user.username;

	// FILLING INPUT FORM WITH THE CURRENT VALUE
	useEffect(()=> {
		// console.log("Rendered"+onEditMode );
		if(nameRef.current != null && emailRef.current != null){
			nameRef.current.value = user.username;
			emailRef.current.value = user.email;
		}
	},[onEditMode]);

	// TOGGLE BETWEEN EDIT AND VIEW PROFILE MODE
	const editModeToggler = () => {
		setOnEditMode((prevState) => prevState = !prevState );
	}

	// UPDATE USER INFO
	const updateUserHandler = async (event) => {
		event.preventDefault();
		const newProfileInfo = {
			userId: user._id,
			username: nameRef.current.value,
			email: emailRef.current.value
		}
		// CHECKING IF NEW PHOTO IS UPLOADED 
		if(userPhoto){
			let photoData = new FormData(); 
			
			const filename = `${userPhoto.name}`;
			photoData.append("filename", filename);
			photoData.append("post_photo", userPhoto);
			newProfileInfo.profilePicture = filename;

			try {
				await axios.post("/upload", photoData);
			} catch (error) {
				console.log(error);
			}
		}
		// UPDATING CALL TO API
		try {
			const response = await axios.put(`/users/${user._id}`,newProfileInfo)
		
			dispatch(
				{
					type: "LOGIN_SUCCESS",
					payload: response.data
				})
				console.log(response);
				setOnEditMode((prevState)=> prevState = !prevState);
		
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="profileUpdatewrapper">
			<div className="profileUpdateContainer">
				<h2 className="profileUpdateHeader"><span className="profileName">{userName.split(" ")[0]}</span>'S PROFILE</h2>
				<span className="headerUnderline"></span>
				<div className="profileUpdateContent">
				
					
					<form className="profileUpdateForm">
						<div className="profileFormGroup right">
							{
								// console.log(typeof(userPhoto))
							}
							{
								userPhoto === "" ? 
								<img className="profileUpdateImage" id="one" src={defaultImagePath+"default_image.jpg"} />
								:
								<img className="profileUpdateImage" src={typeof(userPhoto) === "string" ? defaultImagePath+userPhoto : URL.createObjectURL(userPhoto)} />
							}
							{
								onEditMode ?
									<label htmlFor="imgUploader" className="imgUploaderLabel">
										<BiImageAdd className='uploadImgIcon' />
										<span>
											Upload Image
										</span>
									</label>
									:
									null
							}
							<input id="imgUploader" className="imageUploader" type="file" onChange={event => setUserPhoto(prevState => prevState = event.target.files[0])}/>
						</div>
						{
							onEditMode ? 
							<div className="profileFormGroup left">
								<p className="profileInfo">Profile Information</p>
								<input ref={nameRef} className="inputCred" type="text" placeholder="Your Name" />
								<input ref={emailRef} className="inputCred" type="email" placeholder="Your Email" />
								{/* <input ref={userNameRef} className="inputCred" type="password" placeholder="Password" /> */}
								<input onClick={updateUserHandler} className="updateButton" type="button" value="Update" />
							</div>
							:
							<div className="profileFormGroup left">
								<p className="profileInfo">Profile Information</p>
								<p className="profileInfo">Name : {user.username}</p>
								<p className="profileInfo">email : {user.email}</p>
								{/* <p className="profileInfo">Password</p> */}
								{/* <input className="inputCred" type="text" placeholder="Your Name" />
								<input className="inputCred" type="email" placeholder="Your Email" />
								<input className="inputCred" type="password" placeholder="Password" />
								<input className="updateButton" type="button" value="Update" /> */}
							</div>
						}
						
					</form>
					<button onClick={editModeToggler}>EDIT PROFILE</button>
				</div>
			</div>
		</div>
	)
}
export default ProfileUpdate;