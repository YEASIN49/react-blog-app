import '../css/navbar.css';
import profileImage from '../images/user-profile.jpg';

const Navbar = (props) => {

	// isBurgerBtnOpen

	return (
		<nav className='navItemContainer'>
			<div className='allNavItem'>
				<div className="navLeft logo">Review<span>Them</span></div>
				<div className={props.isBurgerBtnOpen ? 'navCenter navOpen' : 'navCenter navClosed'}>
					<a href='' className='navLinks'>HOME</a>
					<a href='' className='navLinks'>ABOUT</a>
					<a href='' className='navLinks'>CONTACT</a>
					<a href='' className='navLinks'>WRITE</a>
					<a href='' className='navLinks'>LOGOUT</a>
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
					<img className='profileImage' src={profileImage} />
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