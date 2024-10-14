import { useEffect, useState, useRef } from 'react';
import HTTPManager from '../HTTPManager.js'
import { useParams } from 'react-router-dom';
import Foots from '../components/Footer';
import ModalView from '../components/Modal';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import '../styles/ProductPage.css';
import Loader from '../components/Loader';
const BASE_URL = 'http://localhost:5000';
const httpManager = new HTTPManager(BASE_URL);


function ProductPage() {
    const [project, setProject] = useState([]);
    const [closeLoader, setCloseLoader] = useState(false);
    const params = useParams();
    const containerRef = useRef(null);
    const [index, setIdenx] = useState(-1);

    const fetchProject = async () => {
        let prj = {};
        try {
            prj = await httpManager.getProducts(`/commercials/${params?.id}`);
            setTimeout(() => { setCloseLoader(true); }, 1000);
        } catch (err) {
            prj = [];
        }
        setProject({
            ...prj,
            illustrations: prj?.illustrations.map((item) => (
                {
                    src: item
                }
            ))
        });
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
                            project?.illustrations?.map((item,index) => (
                                <div class="imgContainer" onClick={() => {setIdenx(index)}}>
                                    <img src={item.src} ></img>
                                </div>
                        ))
                    }
                    </div>
                </div>
            </section>
            <Lightbox
                open={index >= 0}
                index={index}
                slides={project.illustrations}
                close={() => setIdenx(-1)}
                plugins={[Fullscreen, Thumbnails, Zoom]}
            />
            <Foots/>
        </div>);
}
export default ProductPage;