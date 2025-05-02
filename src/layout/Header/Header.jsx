import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

import pages from "../../utils/pages";
import "./Header.css";
import Logo from "../../assets/logo.png";

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={Logo} alt="Little Lemon" />
        </Link>
        <div className="nav-link-group">
          {navLinks.map((navLink, index) => (
            <Link key={index} to={navLink.path} className="nav-link">
              {navLink.name}
            </Link>
          ))}
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Hamburger
            size={30}
            rounded
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
          />
        </div>
        <div className={`nav-menu ${isMenuOpen ? "visible" : "hidden"}`}>
          <div className="nav-menu-items">
            {navLinks.map((navLink, index) => (
              <Link
                key={index}
                to={navLink.path}
                className="nav-link"
                onClick={closeMenu}
              >
                {navLink.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
