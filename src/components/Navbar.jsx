import '../css/navbar.css';
import profileImage from '../images/user-profile.jpg';
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";

const Navbar = (props) => {

	// isBurgerBtnOpen

	return (
		<nav className='navItemContainer'>
			<div className='allNavItem'>
				<div className="navLeft logo">Review<span className='logoPartTwo'>Them</span></div>
				<div className={props.isBurgerBtnOpen ? 'navCenter navOpen' : 'navCenter navClosed'}>
					<ul>
						<Link to='/'>
							<li href='' className='navLinks'>HOME</li>
						</Link>
						<Link to='/createArticle'>
							<li href='' className='navLinks'>WRITE</li>
						</Link>
						<Link to='/userAccess'>
							<li href='' className='navLinks'>REGISTER</li>
						</Link>


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
					<Link to='/updateProfile'>
						<img className='profileImage' src={profileImage} />
					</Link>
					<Link to='/userAccess'>
						<div href='' className='navLinks iconLink'><BiLogIn className='linkIcon' />LOGIN</div>
					</Link>
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