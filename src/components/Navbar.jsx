import '../css/navbar.css';
import profileImage from '../images/user-profile.jpg';

const Navbar = () => {
	return (
		<nav className='sticky'>
			<div className="navLeft logo">Blog<span>Ali</span></div>
			<div className='navCenter'>
				<a href='' className='navLinks'>HOME</a>
				<a href='' className='navLinks'>ABOUT</a>
				<a href='' className='navLinks'>CONTACT</a>
				<a href='' className='navLinks'>WRITE</a>
				<a href='' className='navLinks'>LOGOUT</a>
			</div>
			<div className='navRight'>
				<img className='profileImage' src={profileImage} />
				<span className="material-icons searchIcon">search</span>
			</div>
		</nav>
	);
}

export default Navbar;