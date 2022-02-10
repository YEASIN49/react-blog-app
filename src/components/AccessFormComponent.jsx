import React from "react";
import '../css/accessFormComponent.css'
import sectionImage from '../images/2.png'

const AccessFormComponent = () => {
	return (
		<div className="accessComponentWrapper">
			<div className="accessComponentContainer">
				<div className="showImageContainer">
					<img className="sectionImage" src={sectionImage} />
				</div>
				{/*<div id="loginForm" className="formContainer">
					<form className="accessForm">
						<h2 className="formTitle">Login <span>Your Account</span></h2>
						<label className="inputLabel" htmlFor="userName">Username</label>
						<input className="inputField" id="userEmail" type="email" />
						<label className="inputLabel" htmlFor="userPassword">Password</label>
						<input className="inputField" id="userPassword" type="password" />
						<button className="formPost">Login</button>
					</form>
					<button className="createAccountButton">Create New Account</button>
				</div>*/}
				<div id="registerForm" className="formContainer">
					<form className="accessForm">
						<h2 className="formTitle">Register <span>Your Account</span></h2>
						<label className="inputLabel" htmlFor="userName">Name</label>
						<input className="inputField" id="userEmail" type="text" />
						<label className="inputLabel" htmlFor="userName">Email</label>
						<input className="inputField" id="userEmail" type="email" />
						<label className="inputLabel" htmlFor="userPassword">Password</label>
						<input className="inputField" id="userPassword" type="password" />
						<button className="formPost">Login</button>
					</form>
					<button className="createAccountButton register">Create New Account</button>
				</div>
			</div>
		</div>
	)
}
export default AccessFormComponent;