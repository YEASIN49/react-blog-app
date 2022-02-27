import React, { useEffect, useRef, useState } from "react";
import '../css/accessFormComponent.css'
import sectionImage from '../images/2.png'
import { HiLightBulb } from "react-icons/hi";
import { GiThink } from "react-icons/gi"
import { GiPlantSeed } from "react-icons/gi"
import { GiRead } from "react-icons/gi"
import { GiPencil } from "react-icons/gi"
import axios from "axios";



const AccessFormComponent = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isRegisterred, setIsRegisterred] = useState(false);
	const [showLogin, setShowLogin] = useState(true);

// LOGIN STATUS UPDATER
	useEffect(()=>{
		console.log("ENTERED ACCESS FORM COMPONENT EFFECT HOOK")
		setShowLogin((prevState)=> prevState = !prevState);
	},[isRegisterred]);

	// REGISTER SUBMIT HANDLER
	const handleRegisterSubmit = async (event) => {
		event.preventDefault();
		try {
			const userResponse = await axios.post("/auth/register",
			{
				username,
				email,
				password
			});
			setIsRegisterred((prevState)=> prevState = !prevState);
			console.log(userResponse);
			console.log(isRegisterred);
		} catch (error) {
			console.log(error);
		}
	}

	const userRef = useRef();
	const passwordRef = useRef();

// LOGIN SUBMIT HANDLER
	const handleLoginSubmit = () => async (event) => {
		event.prevent.default();
	}

	return (
		<div className="accessComponentWrapper">
			<div className="accessComponentContainer">
				<div className="showImageContainer">
					<h2 className="bannerHeader"><HiLightBulb className="loginHeaderIcon" />READ <span className="textDivider">|</span> THINK  <span className="textDivider">|</span>  WRITE  <span className="textDivider">|</span>  GROW <GiPlantSeed className="loginHeaderIcon" /></h2>
					<img className="sectionImage" src={sectionImage} />
				</div>
				{/* LOGIN */}
				{ showLogin ? 
					<div id="loginForm" className="formContainer">
					<form className="accessForm" onSubmit={handleLoginSubmit}>
						<h2 className="formTitle">Login <span>Your Account</span></h2>
						<label className="inputLabel" htmlFor="userName">Username</label>
						<input ref={userRef} className="inputField" id="userName" type="text" />
						<label className="inputLabel" htmlFor="userPassword">Password</label>
						<input ref={passwordRef} className="inputField" id="userPassword" type="password" />
						<button className="formPost" type="submit">Login</button>
					</form>
					<button className="createAccountButton">Create New Account</button>
				</div> 
				: 
				/* REGISTER */
					<div id="registerForm" className="formContainer">
						<form className="accessForm" onSubmit={handleRegisterSubmit}>
							<h2 className="formTitle">Register <span>Your Account</span></h2>
							<label className="inputLabel" htmlFor="userName">Name</label>
							<input 
								onChange={(event)=>(
									setUsername((prevState) => (prevState = event.target.value))
									)
									}
								className="inputField" id="username" type="text" />

							<label className="inputLabel" htmlFor="userName">Email</label>
							<input 
								onChange={(event)=>(
									setEmail((prevState) => (prevState = event.target.value))
									)
									}
								className="inputField" id="userEmail" type="email" />

							<label className="inputLabel" htmlFor="userPassword">Password</label>
							<input 
								onChange={(event)=>(
									setPassword((prevState) => (prevState = event.target.value))
									)
									}
								className="inputField" id="userPassword" type="password" />
							<button className="formPost">Register</button>
						</form>
						<button className="createAccountButton register">Alread Have An Account ?</button>
					</div>
				}
			</div>
		</div>
	)
}
export default AccessFormComponent;