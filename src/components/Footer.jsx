import '../styles/Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Foots() {
    return (
        <footer>
            <div class="footer_logo">
                <img src="https://static.wixstatic.com/media/e2789b_7266c77da6ff48f6891c783723b66c0b~mv2.png/v1/crop/x_0,y_0,w_450,h_243/fill/w_126,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo.png" />
                <div class="footer_text">LANDSCAPING</div>
            </div>
            <div class="footer_content">
                <div class="footer_column">
                    <div class="title">Find us</div>
                    <div class="element">
                        <div class="footer_text"> <FaMapMarkerAlt class="foot_icon" /></div>
                        <div class="footer_text">243 Westbrook Rd.<br />Carp, ON K0A 1L0</div>
                    </div>
                </div>
                <div class="footer_column">
                    <div class="title">Contact us</div>
                    <div class="element">
                        <div class="footer_text"><FaPhoneAlt class="foot_icon"/></div>
                        <div class="footer_text"><a href="tel:+6133167833">(613)-316-7833</a></div>
                    </div>
                    <div class="element">
                        <div class="footer_text"><FaEnvelope class="foot_icon"/></div>
                        <div class="footer_text"><a href="mailto:info@gloverbrotherslandscaping.com">Mail us</a></div>
                    </div>
                </div>
                <div class="footer_column">
                    <div class="title">Follow us</div>
                    <div class="element">
                        <div class="footer_text"><FaFacebook class="foot_icon" /></div>
                        <div class="footer_text">
                            <a href="https://www.facebook.com/people/Glover-Brothers-Landscaping/100066833672938/">
                                Facebook
                            </a>
                        </div>
                    </div>
                    <div class="element">
                        <div class="footer_text"><FaInstagram class="foot_icon" /></div>
                        <div class="footer_text">
                            <a href="https://www.instagram.com/gloverbrotherslandscaping/">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="signature footer_text">
                &copy; 2024 by Elisee Cishugi B.
            </div>
        </footer>
    );
}
export default Foots;
