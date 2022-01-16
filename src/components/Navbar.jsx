import '../css/navbar.css';
import profileImage from '../images/user-profile.jpg';

const Navbar = ({ isBurgerBtnOpen, toggleSearchModal, isSearchModalOpen, toggleBurgerBtn }) => {

	// isBurgerBtnOpen

	return (
		<nav className='navItemContainer sticky'>
			<div className="navLeft logo">Blog<span>Ali</span></div>
			<div className={isBurgerBtnOpen ? 'navCenter navOpen' : 'navCenter navClosed'}>
				<a href='' className='navLinks'>HOME</a>
				<a href='' className='navLinks'>ABOUT</a>
				<a href='' className='navLinks'>CONTACT</a>
				<a href='' className='navLinks'>WRITE</a>
				<a href='' className='navLinks'>LOGOUT</a>
			</div>
			<div className={isBurgerBtnOpen ? 'navRight' : 'navRight navClosed'}>
				<div onClick={toggleSearchModal} className={isSearchModalOpen ? 'modalContainer' : 'modalContainer modalClose'}>
					<form action="" className='searchForm'>
						<input type="text" className='searchInputField' placeholder="Search.." name="search" />
						<button type="submit" className='searchButton'><span className="material-icons searchIcon">search</span></button>
					</form>
				</div>
				<button onClick={toggleSearchModal} className='searchButtonToggler'><span className="material-icons">search</span></button>
				<img className='profileImage' src={profileImage} />
			</div>
			<div className={'burgerButtonContainer'} onClick={toggleBurgerBtn}>
				<div class={isBurgerBtnOpen ? "burgerpng hamburger-btn-close" : "burgerpng"}>
					<div class="line1"></div>
					<div class="line2"></div>
					<div class="line3"></div>
				</div>
			</div>
		</nav >
	);
}

export default Navbar;