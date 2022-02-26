import React from "react";
import '../css/accessFormComponent.css'
import sectionImage from '../images/2.png'
import { HiLightBulb } from "react-icons/hi";
import { GiThink } from "react-icons/gi"
import { GiPlantSeed } from "react-icons/gi"
import { GiRead } from "react-icons/gi"
import { GiPencil } from "react-icons/gi"



const AccessFormComponent = () => {
	return (
		<div className="accessComponentWrapper">
			<div className="accessComponentContainer">
				<div className="showImageContainer">
					<h2 className="bannerHeader"><HiLightBulb className="loginHeaderIcon" />READ <span className="textDivider">|</span> THINK  <span className="textDivider">|</span>  WRITE  <span className="textDivider">|</span>  GROW <GiPlantSeed className="loginHeaderIcon" /></h2>
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
						<input className="inputField" id="username" type="text" />

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