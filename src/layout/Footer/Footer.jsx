import { Link } from "react-router-dom";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import pages from "../../utils/pages";
import "./Footer.css";
import LogoFooter from "../../assets/logo-footer.png";

const contacts = [
  { icon: faLocationDot, info: "678 Pisa Ave, Chicago, IL 60611" },
  { icon: faPhone, info: "(312) 593-2744" },
  { icon: faEnvelope, info: "customer@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook", link: "https://www.facebook.com" },
  { icon: faXTwitter, name: "twitter", link: "https://www.x.com" },
  { icon: faInstagram, name: "instagram", link: "https://www.instagram.com" },
  { icon: faYoutube, name: "youtube", link: "https://www.youtube.com" },
];

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <Link to="/" className="logo-footer">
          <img src={LogoFooter} alt="Little Lemon" />
        </Link>
        <nav className="footer-nav-group">
          <h4>SITEMAP</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path} className="footer-nav-link">
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} className="icon" />
                {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="footer-social">
          <h4>CONNECT WITH US</h4>
          {socials.map((social, index) => (
            <Link
              key={index}
              to={social.link}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" className="icon" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
