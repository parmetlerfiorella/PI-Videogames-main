import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <span className="footer__span">Created by <span className="span">Fiorella Parmetler</span></span>
            <div className="footer__links">
                <a href="https://www.linkedin.com/in/fiorella-parmetler-63632424a/">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/parmetlerfiorella">
                    <FaGithub/>
                </a>
            </div>
        </footer>
    );
};
export default Footer;