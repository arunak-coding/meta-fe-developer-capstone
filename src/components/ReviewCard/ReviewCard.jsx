import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ReviewCard.css";

const ratingLevels = {
  0: faStarRegular,
  0.5: faStarHalfStroke,
  1: faStar,
};

function ReviewCard({ reviewer }) {
  return (
    <article className="review-card">
      <div className="review-card-image">
        <img src={reviewer.image} alt={reviewer.fullName} />
      </div>
      <h4 className="reviewer-name">{reviewer.fullName}</h4>
      <div className="rating">
        {reviewer.rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="lg"
          />
        ))}
      </div>
      <blockquote>
        <p>"{reviewer.says}"</p>
      </blockquote>
    </article>
  );
}

export default ReviewCard;
