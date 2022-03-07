import React, { useContext, useEffect, useRef, useState  } from "react";
import '../css/accessFormComponent.css'
import sectionImage from '../images/2.png'
import { HiLightBulb } from "react-icons/hi";
import { GiThink } from "react-icons/gi"
import { GiPlantSeed } from "react-icons/gi"
import { GiRead } from "react-icons/gi"
import { GiPencil } from "react-icons/gi"
import axios from "axios";
import { Context } from "../Context/Context";
import { useLocation, useNavigate, Link } from "react-router-dom";



const AccessFormComponent = () => {
	const [username, setUsername] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isRegisterred, setIsRegisterred] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const linkParams = useLocation();
	const { renderLoginForm }  = linkParams.state;
	const navigate = useNavigate();
	// const redirectByNavigation = navigation
	// 
	const emailRef = useRef();
	const passwordRef = useRef();
	const {dispatch, isFetching} = useContext(Context);



// LOGIN STATUS UPDATER
	useEffect(()=>{
			setShowLogin((prevState)=> prevState = renderLoginForm);
		
		console.log(showLogin);
		console.log(renderLoginForm);
	},[renderLoginForm]);
// Successfull register effect
// useEffect(()=>{
	// console.log("ENTERED ACCESS FORM COMPONENT EFFECT HOOK")
	// setShowLogin((prevState)=> prevState = !prevState);
	
	
// },[isRegisterred]);
	

	

	// REGISTER SUBMIT HANDLER
	const handleRegisterSubmit = async (event) => {
		event.preventDefault();
		try {
			const userResponse = await axios.post("/auth/register",
			{
				username: username,
				email: userEmail,
				password: password
			});
		
			
			setIsRegisterred((prevState)=> prevState = true)
			

		} catch (error) {
			console.log(error);
		}
	}


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
			dispatch(
				{
					type: "LOGIN_SUCCESS",
					payload: response.data
			})
			navigate("/");
		} catch (error) {
			dispatch({type: "LOGIN_FAILED"});
		}
	}
	// console.log(isFetching);
	return (
		<div className="accessComponentWrapper">
			<div className="accessComponentContainer">
				<div className="showImageContainer">
					<h2 className="bannerHeader"><HiLightBulb className="loginHeaderIcon" />READ <span className="textDivider">|</span> THINK  <span className="textDivider">|</span>  WRITE  <span className="textDivider">|</span>  GROW <GiPlantSeed className="loginHeaderIcon" /></h2>
					<img className="sectionImage" src={sectionImage} />
				</div>
				{/* LOGIN */ }
				 {showLogin ?  
					<div id="loginForm" className="formContainer">
					<form className="accessForm" onSubmit={handleLoginSubmit}>
						<h2 className="formTitle">Login <span>Your Account</span></h2>
						<label className="inputLabel" htmlFor="userEmail">Email</label>
						<input ref={emailRef} className="inputField" id="userEmail" type="email" />
						<label className="inputLabel" htmlFor="userPassword">Password</label>
						<input ref={passwordRef} className="inputField" id="userPassword" type="password" />
						<button id="loginButton" className="formPost" type="submit" disabled={isFetching}>Login</button>
					</form>
					<Link style={{textAlign: "center"}} to={'/userAccess'}
								state= {{renderLoginForm: false}}
						>
						<button className="createAccountButton">Create New Account</button>
					</Link>
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

							<label className="inputLabel" htmlFor="userEmail">Email</label>
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
							<button className="formPost" type="submit">Register</button>
						</form>
						<Link style={{textAlign: "center"}} to={'/userAccess'}
								state= {{renderLoginForm: true}}
						>
							<button  className="createAccountButton register">Alread Have An Account ?</button>
						</Link>
						{
							isRegisterred ? 
							<Link to={'/userAccess'}
								state= {{ renderLoginForm: true}}
							>	
								<div href='' className='navLinks iconLink'>LOGIN</div>
							</Link>
							// <p>Register Successfull </p> 
							: null
						}
					</div>
				}
			</div>
		</div>
	)
}
export default AccessFormComponent;