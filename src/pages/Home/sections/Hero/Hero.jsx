import { Link } from "react-router-dom";

import "./Hero.css";
import pages from "../../../../utils/pages";
import RestuarantFood from "../../../../assets/restaurant-food.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            A cozy, family-run Mediterranean restaurant bringing timeless
            flavors to life with a contemporary flair, right in the heart of
            Chicago.
          </p>

          <Link className="button-primary" to={pages.get("reservations").path}>
            Reserve a Table
          </Link>
        </div>
        <img
          className="hero-image"
          src={RestuarantFood}
          alt="Restaurant Food"
        />
      </div>
    </section>
  );
}

export default Hero;
