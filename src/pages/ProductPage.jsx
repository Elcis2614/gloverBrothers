import { useEffect, useState, useRef } from 'react';
import HTTPManager from '../HTTPManager.js'
import { useParams } from 'react-router-dom';
import Foots from '../components/Footer';
import ModalView from '../components/Modal';
import '../styles/ProductPage.css';
import Loader from '../components/Loader';
const BASE_URL = 'http://localhost:5000';
const httpManager = new HTTPManager(BASE_URL);


function ProductPage() {
    const [project, setProject] = useState([]);
    const [modalImg, setModal] = useState("");
    const [modalOpened, setModalOpened] = useState(false);
    const [closeLoader, setCloseLoader] = useState(false);
    const params = useParams();
    const containerRef = useRef(null);

    const fetchProject = async () => {
        let prj = {};
        try {
            prj = await httpManager.getProducts(`/commercials/${params?.id}`);
            setTimeout(() => { setCloseLoader(true); }, 1000);
        } catch (err) {
            prj = [];
        }
        setProject(prj);
    }
    const handleClick = (imgSrc) => {
        setModal(imgSrc);
        setModalOpened(true);
    }
    useEffect(() => {
        fetchProject();
    }, [])
    return (
        <div>
            <Loader close={closeLoader}/>
            <section>
                <div  class="container">
                    <div class="containerTitle">
                        <div>
                            <p>{project?.title}</p>
                        </div>
                        <div>
                            <p>{project?.title2}</p>
                        </div>
                        <div>
                            <p>{project?.textContent}</p>
                        </div>
                    </div>
                    <div class="productProfile">
                        <img src={project?.profile} />
                    </div>
                </div>
            </section>
            <section>
                <div  class="horContainer" >
                    <div class="picContainer" ref={containerRef}>
                        {
                            project?.illustrations?.map((item) => (
                                <div class="imgContainer" onClick={() => { handleClick(item)}}>
                                <img src={item} ></img>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
            {
                modalOpened && <ModalView src={modalImg} setView={setModalOpened} />
            }
            <Foots/>
        </div>);
}
export default ProductPage;