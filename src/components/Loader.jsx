import '../styles/Loader.css';
import loadingGif from '../assets/gif/loader.gif';
import loadingImg from '../assets/img/loader.png';
function Loader({close}) {
    return (
        <div class={close ? "loadContainer closeLoader" : "loadContainer" }>
            <div class="LoadLogo">
                <img src="https://static.wixstatic.com/media/e2789b_7266c77da6ff48f6891c783723b66c0b~mv2.png/v1/crop/x_0,y_0,w_450,h_243/fill/w_126,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo.png" />
            </div>
            <div class="loadingTitle">
                <div class="node">Glover Brothers Landscaping</div>
            </div>
            <div class="loadingGif">
                <img src={close ? loadingImg : loadingGif} />
                <span class="loadingTxt">{close ? "Ready!" : "loading..."}</span>
            </div>
        </div>
    )
}
export default Loader;