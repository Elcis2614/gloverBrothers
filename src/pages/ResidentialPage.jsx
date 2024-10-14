import { useEffect, useState } from 'react';
import HTTPManager from '../HTTPManager.js';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Foots from '../components/Footer';

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaArrowUp } from "react-icons/fa";
import { FaHouzz } from "react-icons/fa";
import '../styles/Residential.css';

const httpManager = new HTTPManager();
const getIllustrations = function (data) {
    let final = [];
    Object.values(data).forEach((item) => {
        final = [...final, ...(item.illustrations)];
    });
    return final.map((item) => (
        {
            src: item,
            alt: "Glover Brothers Images"
        }
    ));
}
function ResidentialPage() {
    const [data, setData] = useState([]);
    const [showUpButton, setUpButton] = useState(false);
    const [index, setIdenx] = useState(-1);
    
    const fetchData = async () => {
        try {
            const items = await httpManager.getProducts('residentials/');
            setData(getIllustrations(items));
        } catch (err) {
            setData([]);
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1500) {
                setUpButton(true);
            } else {
                setUpButton(false);
            }
        })
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div class="sectionClass">
            <div class="topContainer">
                <div class="pageIcon">
                    <FaHouzz />
                </div>
                <div class="headers">
                    <h1>Residential</h1>
                    <h2>Projects</h2>
                </div>
                <div class="paragraphs">
                    From Concept to Creation, We Bring Your Dream
                    Yard to Life with Care and Precision. Experience the Joy of
                    Watching Your Vision Blossom Right Before Your Eyes.
                </div>
                <div class="line"></div>
            </div>
            <div class="gridContainer">
                <div class="classGrid">
                    {
                        data?.map((item, index) => 
                            <div key={item?.id} class="imgItem" onClick={() => { setIdenx(index)}}>
                                <img src={item.src} alt={ item.alt}/>
                            </div>
                        
                        )
                    }
                </div>
            
                </div>
            
            {
                showUpButton && <div class="upContainer">
                    <div class="upButton" onClick={scrollUp}><FaArrowUp /></div>
                    </div>
            }
            <Lightbox                
                open={index >= 0}
                index={index}
                slides={data}
                close={() => setIdenx(-1)}
                plugins={[Fullscreen, Thumbnails, Zoom]}
             />
            <Foots />
        </div>
    )
}

export default ResidentialPage;