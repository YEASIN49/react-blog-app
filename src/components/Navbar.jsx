import '../css/navbar.css';
import profileImage from '../images/user-profile.jpg';
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import { useContext } from 'react';
import { Context } from '../Context/Context';

const Navbar = (props) => {

	// isBurgerBtnOpen

	const {user, dispatch} = useContext(Context);
	const profileImagepath = "http://localhost:5000/images/"
	
	// const renderLogin = {
	// 	pathname: 
	// }

	const logoutHandler = async () => {
		dispatch({type: "LOGOUT_SUCCESSFULL"});
	}



	return (
		<nav className='navItemContainer'>
			<div className='allNavItem'>
				<Link to='/'>
					<div className="navLeft logo">Review<span className='logoPartTwo'>Them</span></div>
				</Link>
				<div className={props.isBurgerBtnOpen ? 'navCenter navOpen' : 'navCenter navClosed'}>
					<ul>
						<Link to='/'>
							<li href='' className='navLinks'>HOME</li>
						</Link>
						{
							user ? 
							<Link to='/createArticle'>
								<li href='' className='navLinks'>WRITE</li>
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
							<li href='' className='navLinks'>REGISTER</li>
						</Link>
						}


					</ul>
				</div>
				<div className={props.isBurgerBtnOpen ? 'navRight' : 'navRight navClosed'}>
					<div className={props.isSearchModalOpen ? 'modalContainer' : 'modalContainer modalClose'}>
						<form action="" className='searchForm'>
							<input type="text" className='searchInputField' placeholder="Search.." name="search" />
							<button type="submit" className='searchButton'><span className="material-icons searchIcon">search</span></button>
						</form>
						<button className='closeModalBtn' onClick={props.toggleSearchModal}>Close</button>
					</div>
					<button onClick={props.toggleSearchModal} className='searchButtonToggler'><span className="material-icons">search</span></button>
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
							<Link to={'/'} >
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
				<div className={'burgerButtonContainer'} onClick={props.toggleBurgerBtn}>
					<div className={props.isBurgerBtnOpen ? "burgerpng hamburger-btn-close" : "burgerpng"}>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;