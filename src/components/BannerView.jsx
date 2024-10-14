import React, { useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/BannerView.css';

const data = [
	{
		title1: "Commercial",
		title2: "Landscape construction",
		message: <>+ 100 years combined experience <br />from our leadership team.<br />We make your life easy.</>,
		btnLabel: "VIEW PROJECTS",
		link: "~/commercials",
		src: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/302436331_404619878442465_2588978556302067146_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=51DJJMd9cSoQ7kNvgETr1Gu&_nc_ht=scontent-lga3-2.xx&_nc_gid=A_s-OGOosaKRJbmNq_xi1UI&oh=00_AYDLA7oeIUMkV96knrF_6ieVXRMW8sNg671WFAiZdiiXRg&oe=670F2CAD"
	},
	{
		title1: "Leader in",
		message: <>Beautiful Landscapes.<br/>Fearless Innovation.<br/>Uncompromising Integrity<br/></>,
		btnLabel: "VIEW PROJECTS",
		link: "/residentials",
		src: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/38740236_2074480489431531_660715903138136064_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=GMVIh5aZOMAQ7kNvgGMNgr1&_nc_ht=scontent-lga3-1.xx&_nc_gid=A_8qVF7OZsL7BWKH3x4wux2&oh=00_AYAee64YNGikCZC3kOyS7rSnxB71EpCRkoAYgA9ZAt1CnQ&oe=6730D89E",
	},

	{
		title1: "Residential",
		message: <>We provide executive service.<br/> Easy to deal with.<br /> Driven by experience."</>,
		btnLabel: "VIEW PROJECTS",
		link: "/residentials",
		src: "https://static.wixstatic.com/media/e2789b_967b3e8ab19e4836a46c46224a21a779~mv2.jpg/v1/fill/w_720,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e2789b_967b3e8ab19e4836a46c46224a21a779~mv2.jpg",
	},
	{
		title1: "Commercial",
		message: <>We provide executive service.<br /> Easy to deal with.<br /> Driven by experience."</>,
		btnLabel: "VIEW PROJECTS",
		link: "/commercials",
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
		setTimeout(() => { wrapper?.classList.remove('next'); }, 4000);
	}

	setTimeout(() => { handleShift() }, 6000);
	return (
		<section class="section_container">
			<div ref={wrapperRef} class="gradient">
				<div class="bannerTitle">
					<div class="heading">
						<h1>Leader in</h1>
						<h1>Landscape Construction </h1>
						<div class="line"></div>
					</div>
					<div class="bannerContent">
						<div class="moto">
							{cards[0].message}
						</div>
						<Link to="/commercials">
							<div class="btnProjects">
								<div class="circled">
									<FaArrowRight />
								</div>
								<p>{cards[0].btnLabel}</p>
							</div>
						</Link>
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