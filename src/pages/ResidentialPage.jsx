import { useEffect, useState } from 'react';
import HTTPManager from '../HTTPManager.js'
import Foots from '../components/Footer';
import ModalView from '../components/Modal';
import { FaArrowUp } from "react-icons/fa";
import { FaHouzz } from "react-icons/fa";
import Loader from '../components/Loader';
import '../styles/Residential.css';

const httpManager = new HTTPManager();
const getIllustrations = function (data) {
    let final = [];
    Object.values(data).forEach((item) => {
        final = [...final, ...(item.illustrations)];
    });
    return final;
}
function ResidentialPage() {
    const [data, setData] = useState([]);
    const [modalOpened, setModalOpen] = useState(false);
    const [modalImg, setModal] = useState("");
    const [showUpButton, setUpButton] = useState(false);

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
    const handleClick = (imgSrc) => {
        setModal(imgSrc);
        setModalOpen(true);
    }
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
                    We drag structure and beauty out of the natural world,
                    inspired by nature but forged to create usable outdoor spaces.
                </div>
                <div class="line"></div>
            </div>
            <div class="gridContainer">
                <div class="classGrid">
                    {
                        data?.map((item) =>
                            <div key={item?.id} class="imgItem" onClick={() => {handleClick(item) }}>
                                <img src={item}/>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                modalOpened  && <ModalView src={modalImg} setView={setModalOpen} />
            }
            {
                showUpButton && <div class="upContainer">
                    <div class="upButton" onClick={scrollUp}><FaArrowUp /></div>
                    </div>
            }
            <Foots />
        </div>
    )
}

export default ResidentialPage;