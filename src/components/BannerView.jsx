import React, { useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../styles/BannerView.css';

const data = [
	{
		title1: "Commercial",
		title2: "Landscape construction",
		message: <>+ 100 years combined experience <br />from our leadership team.<br />We make your life easy.</>,
		btnLabel: "EXPLORE",
		link: "/gloverBrothers/portofolio/commercials/",
		src: "https://static.wixstatic.com/media/e2789b_1d0759d65938495dac13e9bf388fb1fc~mv2.jpg/v1/crop/x_0,y_893,w_4032,h_2131/fill/w_1225,h_648,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/King%20Edward%20Hotel%20(3)%20(1)_JPG.jpg",
	},
	{
		title1: "Leader in",
		message: <>Beautiful Landscapes.<br/>Fearless Innovation.<br/>Uncompromising Integrity<br/></>,
		btnLabel: "VIEW PROJECTS",
		link: "/gloverBrothers/portofolio/residentials/",
		src: "https://static.wixstatic.com/media/e2789b_5cb0e77bc70a4769a26b99db90c3c28f~mv2.jpg/v1/fill/w_480,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e2789b_5cb0e77bc70a4769a26b99db90c3c28f~mv2.jpg",
	},

	{
		title1: "Residential",
		message: <>We provide executive service.<br/> Easy to deal with.<br /> Driven by experience."</>,
		btnLabel: "EXPLORE",
		link: "/gloverBrothers/portofolio/residentials",
		src: "https://static.wixstatic.com/media/e2789b_967b3e8ab19e4836a46c46224a21a779~mv2.jpg/v1/fill/w_720,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e2789b_967b3e8ab19e4836a46c46224a21a779~mv2.jpg",
	},
	{
		title1: "Commercial",
		message: <>We provide executive service.<br /> Easy to deal with.<br /> Driven by experience."</>,
		btnLabel: "VISIT",
		link: "/gloverBrothers/portofolio/commercials",
		src: "https://static.wixstatic.com/media/e2789b_1d0759d65938495dac13e9bf388fb1fc~mv2.jpg/v1/crop/x_0,y_893,w_4032,h_2131/fill/w_1225,h_648,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/King%20Edward%20Hotel%20(3)%20(1)_JPG.jpg",
    }
];

function BannerView() {
	const [cards, setCards] = useState(data);
	const wrapperRef = useRef(null);
	const handleShift = () => {
		const wrapper = wrapperRef?.current;
		wrapper?.classList.add('next');
		const temp = [...cards];
		temp.push(temp.shift());
		setCards(temp);
		setTimeout(() => { wrapper?.classList.remove('next'); }, 2000);
	}

	setTimeout(() => { handleShift() }, 4000);
	return (
		<section class="section_container">
			<div ref={wrapperRef} class="gradient">
				<div class="bannerTitle">
					<div class="heading">
						<h1>{cards[0].title1}</h1>
						<h1>Landscape Construction </h1>
						<div class="line"></div>
					</div>
					<div class="bannerContent">
						<div class="moto">
							{cards[0].message}
						</div>
						<NavLink to={cards[0].link}>
							<div class="btnProjects">
								<div class="circled">
									<FaArrowRight />
								</div>
								<p >{cards[0].btnLabel}</p>
							</div>
						</NavLink>
					</div>
				</div>
				<div class="slidersContainer">
					<div class="imageContainer">
						{
							cards.map((item) => (<img src={item.src} />))
						}
					</div>
					<div id="thumbnail">
						{
							cards.map((item) => (<div class="item"><img src={item.src}/></div>))
						}
					</div>
				</div>
			</div>				
		</section>
	);
}
export default BannerView;