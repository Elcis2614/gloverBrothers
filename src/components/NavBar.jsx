import '../styles/NavBar.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const NavBar = function () {
	const [scrolled, setScrolled] = useState(false);
	const [opened, setOpened] = useState(false);
	const [openContact, setOpenContact] = useState(false);
	const [openPorto, setPorto] = useState(false);
	const [portoClicked, setPortoClicked] = useState(false);
	function setScrol () {
		if (window.scrollY > 0)
			setScrolled(true);
		else
			setScrolled(false);
	};
	function navClicked(isPorto) {
		setOpened(false);	
		if (isPorto) 
			setPortoClicked(true);
		else
			setPortoClicked(false);
	};
	function showNav() {setOpened(!opened);}
	function handleContact() {setOpenContact(!openContact);}
	function handlePorto() { setPorto(!openPorto); }
	window.addEventListener("scroll", setScrol);
	return (
		<header class={scrolled ? "row_elements scrolled" : "row_elements" }>
			<div class="logo">
				<img src="https://static.wixstatic.com/media/e2789b_7266c77da6ff48f6891c783723b66c0b~mv2.png/v1/crop/x_0,y_0,w_450,h_243/fill/w_126,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo.png" />
			</div>
			<div class="controleBtn" onClick={ showNav}>
				{
					opened ?  <FaTimes/> : <FaBars/> 
				}
			</div>
			<div class={opened ? "headerItems opened" : "headerItems closed"}>
					<nav id="navBar">
						<ul class="headerList">
							<li><NavLink to="/gloverBrothers/home" onClick={ () => {navClicked(false)}}><p>Home</p></NavLink></li>
							<li><>
									<div class={portoClicked ? "dropList activePorto" : "dropList"} >
										<div class="dropDown" onClick={handlePorto}>
											<p>Portofolio</p>
											<FaAngleDown class="icon"/>
										</div>
										<div class={openPorto ? "listElements open " : "listElements closed"}>
										<div class="item" onClick={ () => {navClicked(true)}}>
												<NavLink to="/gloverBrothers/portofolio/residentials">
													<div class="node"><FaHome class="icons" /></div>
													<div class="node">Residential</div>
												</NavLink>
											</div>
											<div class="separator"></div>
											<div class="item" onClick={ () => {navClicked(true)}}>
												<NavLink to="/gloverBrothers/portofolio/commercials">
													<div class="node"><FaBuilding class="icons" /></div>
													<div class="node">Commercial</div>
												</NavLink>
											</div>
										</div>									
								</div>
								</>
							</li>
							<li><NavLink to="/gloverBrothers/service" onClick={ () => {navClicked(false)}}><p>Services</p></NavLink></li>
							<li><NavLink to="/gloverBrothers/careers" onClick={ () => {navClicked(false)}}><p>Careers</p></NavLink></li>
							<li><NavLink to="/gloverBrothers/about" onClick={ () => {navClicked(false)}}><p>About</p></NavLink></li>
						</ul>
					</nav>
					<div class="contactContainer" onClick={handleContact}>
						<div class="contactBtn dropDown" onClick={handleContact}>
							Contact us<FaAngleDown/>
						</div>
						<div class={openContact ? "contactElements opened" : "contactElements closed"}>
								<div class="item"><a href="tel:+6133167833">
									<div class="node"><FaPhoneAlt class="icons" /></div>
									<div class="node">(613)-316-7833</div></a>
								</div>
								<div class="separator"></div>
								<div class="item"><a href="mailto:info@gloverbrotherslandscaping.com">
									<div class="node"><FaEnvelope class="icons" /></div>
									<div class="node">Email us</div></a>
								</div>
							</div>
						</div>
			</div>
		</header>
	);
};
export default NavBar;