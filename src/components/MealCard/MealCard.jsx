import { Link } from "react-router-dom";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MealCard.css";
import pages from "../../utils/pages";

function MealCard({ item }) {
  return (
    <article className="meal-card">
      <div className="card-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-information">
        <div className="card-header">
          <h3 className="item-name">{item.name}</h3>
          <h3 className="item-price">{item.price}</h3>
        </div>
        <div className="card-description">{item.description}</div>
        <Link className="card-link" to={pages.get("order").path}>
          <p>
            Order a delivery &nbsp;
            <FontAwesomeIcon icon={faMotorcycle} />
          </p>
        </Link>
      </div>
    </article>
  );
}

export default MealCard;
