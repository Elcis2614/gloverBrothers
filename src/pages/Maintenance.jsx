import '../styles/Maintenance.css';
import { Link } from "react-router-dom";
const availables = [
    {
        title: 'Home Page',
        link: '/home'
    },
    {
        title: 'Commercial projects',
        link: '/commercials'
    },
    {
        title: 'Residential projects',
        link: '/residentials',
    },

];
function MaintenancePage() {
    return (
        <section>
            <div class="maintenance">
                <div class="bakcgroundImage">
                    <img src="https://img.freepik.com/premium-photo/3d-flat-icon-as-maintenance-icon-with-copy-space-white-background-concept-as-vector-illustra_980716-427093.jpg?w=1380"/>
                </div>
                <div class="txtContent">
                    <span>Site under maintenant<br /></span>
                    <span>
                        You can't access to this page for the moment.<br/>
                        Kindly visit the following available pages : 
                    </span>
                    <div class="linksBox">
                        {
                            availables.map((item) =>
                                <Link to={item.link}>
                                    <div class="linkItem">
                                        {item.title}
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
                
            </div>
        </section>
    );
}
export default MaintenancePage;