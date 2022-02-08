import React from "react";
import "../css/profileUpdate.css";
import profileImg from "../images/user-profile.jpg";
import { BiImageAdd } from "react-icons/bi";

const ProfileUpdate = () => {
	return (
		<div className="profileUpdatewrapper">
			<div className="profileUpdateContainer">
				<h2 className="profileUpdateHeader">YEASIN'S PROFILE</h2>
				<span className="headerUnderline"></span>
				<div className="profileUpdateContent">
					<form className="profileUpdateForm">
						<div className="profileFormGroup ">
							<img className="profileUpdateImage" src={profileImg} />
							<label htmlFor="imgUploader" className="imgUploaderLabel">
								<BiImageAdd className='uploadImgIcon' />
								<span>
									Upload Image
								</span>
							</label>
							<input id="imgUploader" className="imageUploader" type="file" />
						</div>
						<div className="profileFormGroup left">
							<p className="profileInfo">Profile Information</p>
							<input className="inputCred" type="text" placeholder="Your Name" />
							<input className="inputCred" type="email" placeholder="Your Email" />
							<input className="inputCred" type="password" placeholder="Password" />
							<input className="updateButton" type="button" value="Update" />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default ProfileUpdate;