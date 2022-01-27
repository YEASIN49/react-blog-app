import React, { useState, useEffect, useRef } from "react";
import "../css/hero.css";
import heroMd from '../images/hero-md.jpg'
import heroSm from '../images/hero-sm.jpg'

export default function Hero() {

	const [viewportSize, setViewportSize] = useState(document.body.clientWidth);
	const imgSrc = useRef(null);
	console.log(document.body.clientWidth + "clw");
	console.log(imgSrc.current + "img");


	useEffect(() => {
		console.log("entered");
		if (document.body.clientWidth > 500) {
			console.log("entered if");
			imgSrc.current.setAttribute("src", heroMd);
		} else {
			console.log("entered else");
			console.log(document.getElementById('test'));
			document.getElementById('test').setAttribute("src", heroSm);
		}
	}, [viewportSize]);

	const viewportChangeHandler = () => {
		console.log("called")
		setViewportSize(document.body.clientWidth);
	}
	window.onresize = viewportChangeHandler;


	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleLg outlined">THE MORE YOU REVIEW</span>
				<br />
				<span className="headerTitleLg">THE MORE THEY LEARN</span>
				<span className="headerDetail">An online blogging platform for tech enthusiast around the world. Post, Comment, Vote to let others know the effectiveness of your writing and knowledge.</span>
				<span className="headerCTAButton"><a href="#">See Reviews...</a></span>
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