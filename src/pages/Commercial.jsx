import { useState, useEffect } from 'react';
import HTTPManager from '../HTTPManager.js'
import '../styles/Commercial.css';
import Loader from '../components/Loader';
import { NavLink } from 'react-router-dom';


const httpManager = new HTTPManager();

function Commercials({ title }) {
    const [projects, setProjects] = useState([]);
    const [closeLoader, setCloseLoader] = useState(false);
    const fletchProjects = async () => {
        let prj = [];
        try {
            prj = await httpManager.getProducts('commercials/');
            
        } catch (err) {
            prj = [];
        }
        setProjects(prj);
    }
    useEffect(() => {
        fletchProjects();
        setTimeout(() => { setCloseLoader(true); }, 1000);
    }, [])
    return (
        <div>
        <Loader close={ closeLoader}/>
        <section class="cardsSection">
            <div class="title">
                {title}
            </div>
            <div class="cardsContainer">
                {
                    Object.values(projects).map((element) => (
                        <div class="card">
                            <NavLink to={`/gloverBrothers/portofolio/commercials/${element.id}`}>
                                <div class="imgContainer">
                                    <img src={element.profile} />
                                    <div class="cardLink" >See more</div>
                                </div>
                                <div class="title">
                                        {element.title}
                                    </div>
                            </NavLink>
                        <div class="caption">{element?.textContent}</div>
                    </div>))
                }
            </div>
            </section>
        </div>
    );
}
export default Commercials;