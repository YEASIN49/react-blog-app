import React, { useContext, useEffect, useRef, useState  } from "react";
import '../css/accessFormComponent.css'
import sectionImage from '../images/2.png'
import { HiLightBulb } from "react-icons/hi";
import { GiPlantSeed } from "react-icons/gi"
import axios from "axios";
import { Context } from "../Context/Context";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {MdTaskAlt, MdDangerous,MdOutlineClose} from "react-icons/md";


const AccessFormComponent = () => {
	const [username, setUsername] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isRegisterred, setIsRegisterred] = useState(false);
	const [accessError, setAccessError] = useState(false);
	const [registrationError, setRegistrationError] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const linkParams = useLocation();
	const { renderLoginForm }  = linkParams.state;
	const navigate = useNavigate();

	// const redirectByNavigation = navigation
	// 
	const emailRef = useRef();
	const passwordRef = useRef();
	const registerNameRef = useRef();
	const registerEmailRef = useRef();
	const registerPassRef = useRef();
	const {dispatch, isFetching} = useContext(Context);




// LOGIN STATUS UPDATER
	useEffect(()=>{
		setShowLogin((prevState)=> prevState = renderLoginForm);

	},[renderLoginForm]);

	const accessErrorhandler = (value) => {
	setAccessError((prevState)=> prevState = value)
	}
	const registrationErrorHandler = (value) => {
	setRegistrationError((prevState)=> prevState = value)
	}
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
		
			
			setIsRegisterred((prevState)=> prevState = true);
			registrationErrorHandler(false);
			// setAccessError((prevState)=> prevState = false);
			if(registerNameRef.current || registerEmailRef.current || registerPassRef.current.value){
				registerNameRef.current.value = "" 
				registerEmailRef.current.value = "" ;
				registerPassRef.current.value = "" ;
			}
			
			// navigate("/userAccess");
		} catch (error) {
			console.log(error);
			registrationErrorHandler(true);
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
			accessErrorhandler(false);
			navigate("/");
		} catch (error) {
			dispatch({type: "LOGIN_FAILED"});
			accessErrorhandler(true);
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
						{/* LOGIN FAILURE NOTIFICATION */}
						{accessError ? 
							<div className='navLinks loginFailed warning'>
								{/* < MdTaskAlt className="successIcon" /> */}
								<p>email or password is wrong</p>
							</div>
							:
							""
						}
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
						{/* Success erro notification */}
						
					</Link>
				</div> 
				: 
				/* REGISTER */
					<div id="registerForm" className="formContainer">
						{
							registrationError ? 
								<div className='navLinks registerSucess warning'>
									<p onClick={() => registrationErrorHandler(false)} className="notificationCloseBtn">< MdOutlineClose /></p>
									< MdDangerous className="failIcon" />
									<p>Registration Failed</p>
									<p>Try another email and username</p>
								</div>
								:
								""
						}
						<form className="accessForm" onSubmit={handleRegisterSubmit}>
							<h2 className="formTitle">Register <span>Your Account</span></h2>
							<label className="inputLabel" htmlFor="userName">Name</label>
							<input 
								ref={registerNameRef}
								onChange={(event)=>( //this also can be done only by using ref
									setUsername((prevState) => (prevState = event.target.value))
									)
									}
								className="inputField" id="username" type="text" />

							<label className="inputLabel" htmlFor="userEmail">Email</label>
							<input 
								ref={registerEmailRef}
								onChange={(event)=>( //this also can be done only by using ref
									setUserEmail((prevState) => (prevState = event.target.value))
									)
									}
								className="inputField" id="userEmail" type="email" />

							<label className="inputLabel" htmlFor="userPassword">Password</label>
							<input 
								ref={registerPassRef}
								onChange={(event)=>( //this also can be done only by using ref
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
								<div className='navLinks registerSucess'>
									< MdTaskAlt className="successIcon" />
									<p>Registered Successfull. You Can Login Now</p>
									<p>Click to Login</p> 
								</div>
								
							</Link>
							: null
						}
					</div>
				}
			</div>
		</div>
	)
}
export default AccessFormComponent;