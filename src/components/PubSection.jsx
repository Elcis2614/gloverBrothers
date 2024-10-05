import '../styles/PubSection.css';
import { FaArrowRight } from "react-icons/fa";
import "animate.css/animate.compat.css";
import { motion } from "framer-motion";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const data = [
    {
        image: "https://static.wixstatic.com/media/e2789b_a31db6b6ac6f4cb093562ed9cd383d8a~mv2.jpg/v1/fill/w_720,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e2789b_a31db6b6ac6f4cb093562ed9cd383d8a~mv2.jpg",
        message: "Our team takes the exteriors of these projects off your hands, managing them with professionalism and with actual care about the project that is unmatched in the industry."
    },
    {
        image: "https://static.wixstatic.com/media/e2789b_06a091431e444ac2b0f3f04830747a2f~mv2.jpg/v1/crop/x_0,y_143,w_1600,h_491/fill/w_1225,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bronson%204.jpg",
        message: "We understand that each project is an ongoing evolution of hurdles and solutions, delays and progressions. We work with you at every step of the way"
    }
]
const ImgComp = function ({ src}) {
    const [enteredView, setEntered] = useState(false);
    function addAnim() {
        if (!enteredView) {
            setEntered(true);
        }
    }
    return (
        <motion.div class={enteredView ? "imgCom slider" : "imgCom"} onViewportEnter={addAnim}>
                <img alt="something" src={src}/>
        </motion.div>
    );
}
const DescriptComp = function ({title, content, link}) {
    return (
        <div class="description">
            <h1>{title}</h1>
            <h1>PROJECTS</h1>
            <div class="content">
                {content}
            </div>
            <NavLink to={link}>
                <div class="btnMore">
                    <div class="btnTxt">See more</div><FaArrowRight class="icon"/>
                </div>
            </NavLink>
        </div>);
}
function PubSection({ flip = false }) {
    return (
        <section>
            <div class="pubSection">
                <div class="commercial card right">
                    <ImgComp src={data[0].image}/>
                    <DescriptComp title="Residential" content={data[0].message} link={'portofolio/residentials'}/>
                </div>
                <div class="commercial card left">
                    <DescriptComp title="Commercial" content={data[1].message} link={'portofolio/commercials'}/>
                    <ImgComp src={data[1].image} />
                </div>
            </div>
        </section>
    );
}
export default PubSection;