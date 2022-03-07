import React, { useState, useEffect, useRef } from "react";
import "../css/hero.css";
import heroMd from '../images/hero-md.jpg'
import heroSm from '../images/hero-sm.jpg'
// import { Link } from "react-router-dom";

export default function Hero() {

	const [viewportSize, setViewportSize] = useState(document.body.clientWidth);
	const imgSrc = useRef(null);



	useEffect(() => {
	
		if (document.body.clientWidth > 500) {
		
			imgSrc.current.setAttribute("src", heroMd);
		} else {
			
			document.getElementById('test').setAttribute("src", heroSm);
		}
	}, [viewportSize]);

	useEffect(() => {
		// window.onresize = viewportChangeHandler;
		window.addEventListener("resize", viewportChangeHandler);
		
		return () => {
			
			window.removeEventListener("resize", viewportChangeHandler);
		}

	});

	const viewportChangeHandler = () => {
		
		setViewportSize(document.body.clientWidth);
	}


	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleLg outlined">THE MORE YOU REVIEW</span>
				<br />
				<span className="headerTitleLg">THE MORE THEY LEARN</span>
				<span className="headerDetail">An online blogging platform for tech enthusiast around the world. Post, Comment, Vote to let others know the effectiveness of your writing and knowledge.</span>
				{/* <Link to='/#allPostSection'> */}
					<span className="headerCTAButton"><a href="#allPostSection" >See Reviews...</a></span>
				{/* </Link> */}
			</div>
			<img
				ref={imgSrc}
				id="test"
				className="headerImg"
				// src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				// src={viewportSize > 375 ? { heroMd } : { heroSm }}
				// src={heroSm}
				src=""
				alt=""
			/>
		</div >
	);
}