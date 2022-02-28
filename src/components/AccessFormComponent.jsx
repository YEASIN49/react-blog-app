import React, { useContext, useEffect, useRef, useState } from "react";
import '../css/accessFormComponent.css'
import sectionImage from '../images/2.png'
import { HiLightBulb } from "react-icons/hi";
import { GiThink } from "react-icons/gi"
import { GiPlantSeed } from "react-icons/gi"
import { GiRead } from "react-icons/gi"
import { GiPencil } from "react-icons/gi"
import axios from "axios";
import { Context } from "../Context/Context";



const AccessFormComponent = () => {
	const [username, setUsername] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isRegisterred, setIsRegisterred] = useState(false);
	const [showLogin, setShowLogin] = useState(true);

	console.log("[ENTERED INTO ACCESS_FORM_COMPONENT]");

// LOGIN STATUS UPDATER
	useEffect(()=>{
		console.log("ENTERED ACCESS FORM COMPONENT EFFECT HOOK")
		
	},[isRegisterred]);

	// SHOW LOGIN HANDLER
	const accessFormToggler = () => {
		setShowLogin((prevState)=> prevState = !prevState);
	}

	// REGISTER SUBMIT HANDLER
	const handleRegisterSubmit = async (event) => {
		event.preventDefault();
		try {
			const userResponse = await axios.post("/auth/register",
			{
				username,
				userEmail,
				password
			});
			setIsRegisterred((prevState)=> prevState = !prevState);
			// console.log(userResponse);
			// console.log(isRegisterred);
		} catch (error) {
			console.log(error);
		}
	}

	const emailRef = useRef();
	const passwordRef = useRef();
	const {dispatch, isFetching} = useContext(Context)

// LOGIN SUBMIT HANDLER
	const handleLoginSubmit = async (event) => {
		event.preventDefault();
		dispatch({type: "LOGIN_START"});
		try {
			const response = await axios.post("./auth/login",
			{
				email: emailRef.current.value,
				password: passwordRef.current.value,
				
			})
			console.log(response);
			dispatch(
				{
					type: "LOGIN_SUCCESS",
					payload: response.data
			})
		} catch (error) {
			dispatch({type: "LOGIN_FAILED"});
		}
	}
	console.log(isFetching);
	return (
		<div className="accessComponentWrapper">
			<div className="accessComponentContainer">
				<div className="showImageContainer">
					<h2 className="bannerHeader"><HiLightBulb className="loginHeaderIcon" />READ <span className="textDivider">|</span> THINK  <span className="textDivider">|</span>  WRITE  <span className="textDivider">|</span>  GROW <GiPlantSeed className="loginHeaderIcon" /></h2>
					<img className="sectionImage" src={sectionImage} />
				</div>
				{/* LOGIN */}
				{/* showLogin ?  */}
					<div id="loginForm" className="formContainer">
					<form className="accessForm" onSubmit={handleLoginSubmit}>
						<h2 className="formTitle">Login <span>Your Account</span></h2>
						<label className="inputLabel" htmlFor="userEmail">Email</label>
						<input ref={emailRef} className="inputField" id="userEmail" type="email" />
						<label className="inputLabel" htmlFor="userPassword">Password</label>
						<input ref={passwordRef} className="inputField" id="userPassword" type="password" />
						<button id="loginButton" className="formPost" type="submit" disabled={isFetching}>Login</button>
					</form>
					<button className="createAccountButton">Create New Account</button>
				</div> 
				{/*: 
				/* REGISTER *//*
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
									setUserEmail((prevState) => (prevState = event.target.value))
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
				*/}
			</div>
		</div>
	)
}
export default AccessFormComponent;