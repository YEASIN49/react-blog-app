import { useState } from 'react';
import '../css/navbar.css';
import profileImage from '../images/user-profile.jpg';
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import { useContext } from 'react';
import { Context } from '../Context/Context';

const Navbar = (props) => {

	const [isBurgerBtnOpen, setIsBurgerBtnOpen] = useState(false);
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const {user, dispatch} = useContext(Context);
	const profileImagepath = "http://localhost:5000/images/"
	
	const toggleBurgerBtn = () => {
		const burgerButtonPrevState = isBurgerBtnOpen;
		setIsBurgerBtnOpen(!burgerButtonPrevState);
	}
	const toggleSearchModal = (e) => {
		e.preventDefault();
		const searchModalPrevState = isSearchModalOpen;
		setIsSearchModalOpen(!searchModalPrevState);
	}

	const logoutHandler = async () => {
		dispatch({type: "LOGOUT_SUCCESSFULL"});
	}

	return (
		<nav className='navItemContainer'>

			{
				screenWidth <= 768 ? 
				///////////////////////////////////////
				/// 	IF TRUE -> RENDERING WITH ONCLICK METHOD 
				//  	TO CLOSE NAV ONCLICK ON MOBIE DEVICE
				//		==> **NOTE** ==> THIS RENDER ON EACH CLICK
				////////////////////////////////////////////////
				<div className='allNavItem'>
					
					<Link to='/'>
						<div onClick={props.clickToJump} className="navLeft logo">Review<span className='logoPartTwo'>Them</span></div>
					</Link>
					<div className={isBurgerBtnOpen ? 'navCenter navOpen' : 'navCenter navClosed'}>
						<ul>
							<Link to='/' onClick={toggleBurgerBtn}>
								<li onClick={props.clickToJump} className='navLinks'>HOME</li>
							</Link>
							{
								user ? 
								<Link to='/createArticle' onClick={toggleBurgerBtn}>
									<li className='navLinks'>WRITE</li>
								</Link>
								: 
								""
							}
							{/* 
								CONDITIONAL REGISTER BUTTON 
							*/}
							{
							user ? null :	
							<Link to={'/userAccess'}
									state= {{renderLoginForm: false}}
									onClick={toggleBurgerBtn}
							>
								<li href='' className='navLinks'>REGISTER</li>
							</Link>
							}
						</ul>
					</div>
					<div className={isBurgerBtnOpen ? 'navRight' : 'navRight navClosed'}>
					{/* 
						TO BE ADDED IN FUTURE UPDATE  
					*/}

						{/* <div className={props.isSearchModalOpen ? 'modalContainer' : 'modalContainer modalClose'}>
							<form action="" className='searchForm'>
								<input type="text" className='searchInputField' placeholder="Search.." name="search" />
								<button type="submit" className='searchButton'><span className="material-icons searchIcon">search</span></button>
							</form>
							<button className='closeModalBtn' onClick={props.toggleSearchModal}>Close</button>
						</div>
						<button onClick={props.toggleSearchModal} className='searchButtonToggler'><span className="material-icons">search</span></button> */}
						{
							user ? 
								<Link to='/updateProfile' onClick={toggleBurgerBtn}>
									{
										user.profilePicture ? <img className='profileImage' src={profileImagepath+user.profilePicture} />
										:
										<img className='profileImage' src={profileImagepath+"default_image.jpg"} />
									}
								</Link>
								:
								null
						}

						{/* 
							CONDITIONAL LOGIN - LOGOUT 
						*/}

						{
							user ? 
								<Link to={'/'} onClick={toggleBurgerBtn}>
									<div href='' onClick={logoutHandler} className='navLinks iconLink'><BiLogIn className='linkIcon' />LOGOUT</div>
								</Link>
								:
								<Link to={'/userAccess'}
									state= {{ renderLoginForm: true}}
									onClick={toggleBurgerBtn}
								>	
									<div href='' className='navLinks iconLink'><BiLogIn className='linkIcon' />LOGIN</div>
								</Link>
						}
					</div>
					<div className={'burgerButtonContainer'} onClick={toggleBurgerBtn}>
						<div className={isBurgerBtnOpen ? "burgerpng hamburger-btn-close" : "burgerpng"}>
							<div className="line1"></div>
							<div className="line2"></div>
							<div className="line3"></div>
						</div>
					</div>
				</div> 
				: 
				////////////////////////////////////
				// 	///////////////////////////////////////
				/// 	***ELSE***  -> RENDERING WITHOUT ONCLICK METHOD 
				//  	 ON LARGE DEVICE
				//		==> **NOTE** ==> THIS DOESN'T RENDER ON EACH CLICK
				////////////////////////////////////////////////
				///////////////////////////////////
				<div className='allNavItem'>
					
					<Link to='/' onClick={props.clickToJump}>
						<div className="navLeft logo">Review<span className='logoPartTwo'>Them</span></div>
					</Link>
					<div className={isBurgerBtnOpen ? 'navCenter navOpen' : 'navCenter navClosed'}>
						<ul>
							<Link to='/' onClick={props.clickToJump}>
								<li className='navLinks'>HOME</li>
							</Link>
							{
								user ? 
								<Link to='/createArticle'>
									<li className='navLinks'>WRITE</li>
								</Link>
								: 
								""
							}
							{/* 
								CONDITIONAL REGISTER BUTTON 
							*/}
							{
							user ? null :	
							<Link to={'/userAccess'}
									state= {{renderLoginForm: false}}
									
							>
								<li className='navLinks'>REGISTER</li>
							</Link>
							}
						</ul>
					</div>
					<div className={isBurgerBtnOpen ? 'navRight' : 'navRight navClosed'}>
					{/* 
						TO BE ADDED IN FUTURE UPDATE  
					*/}

						{/* <div className={props.isSearchModalOpen ? 'modalContainer' : 'modalContainer modalClose'}>
							<form action="" className='searchForm'>
								<input type="text" className='searchInputField' placeholder="Search.." name="search" />
								<button type="submit" className='searchButton'><span className="material-icons searchIcon">search</span></button>
							</form>
							<button className='closeModalBtn' onClick={props.toggleSearchModal}>Close</button>
						</div>
						<button onClick={props.toggleSearchModal} className='searchButtonToggler'><span className="material-icons">search</span></button> */}
						{
							user ? 
								<Link to='/updateProfile'>
									{
										user.profilePicture ? <img className='profileImage' src={profileImagepath+user.profilePicture} />
										:
										<img className='profileImage' src={profileImagepath+"default_image.jpg"} />
									}
								</Link>
								:
								null
						}

						{/* 
							CONDITIONAL LOGIN - LOGOUT 
						*/}

						{
							user ? 
								<Link to={'/'}>
									<div href='' onClick={logoutHandler} className='navLinks iconLink'><BiLogIn className='linkIcon' />LOGOUT</div>
								</Link>
								:
								<Link to={'/userAccess'}
									state= {{ renderLoginForm: true}}
									
								>	
									<div href='' className='navLinks iconLink'><BiLogIn className='linkIcon' />LOGIN</div>
								</Link>
						}
					</div>
					<div className={'burgerButtonContainer'} >
						<div className={isBurgerBtnOpen ? "burgerpng hamburger-btn-close" : "burgerpng"}>
							<div className="line1"></div>
							<div className="line2"></div>
							<div className="line3"></div>
						</div>
					</div>
				</div> 
			} {/*
				// END CONDITIONAL RENDERING
			*/}
		</nav>
	);
}

export default Navbar;