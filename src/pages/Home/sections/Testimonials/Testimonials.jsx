import ReviewCard from "../../../../components/ReviewCard/ReviewCard";
import "./Testimonials.css";

import Lady1 from "../../../../assets/lady1.jpg";
import Lady2 from "../../../../assets/lady2.jpg";
import Guy1 from "../../../../assets/guy1.jpg";
import Guy2 from "../../../../assets/guy2.jpg";

const customers = [
  {
    fullName: "Sofia",
    image: Lady1,
    rating: [1, 1, 1, 1, 0.5],
    says: `Absolutely delicious! Everything tasted so fresh, and the service was quick and friendly. Will be back for more!`,
  },
  {
    fullName: "Maya",
    image: Lady2,
    rating: [1, 1, 1, 1, 1],
    says: `Loved every bite! The lamb was super tender and flavorful. Honestly one of the best meals I’ve had in a while.`,
  },
  {
    fullName: "Liam",
    image: Guy1,
    rating: [1, 1, 1, 1, 0.5],
    says: `The hummus was amazing, and the pita was warm and fluffy. Don’t skip the baklava—it’s the perfect sweet treat!`,
  },
  {
    fullName: "Ethan",
    image: Guy2,
    rating: [1, 1, 1, 1, 0],
    says: `Great flavors and super fresh seafood! The wait was a bit long, but it was totally worth it once the food arrived.`,
  },
];

function Testimonials() {
  return (
    <section className="testimonial">
      <div className="container testimonial-container">
        <div className="testimonial-header">
          <h2>What people say about us!</h2>
        </div>
        <div className="review-card-container">
          {customers.map((customer, index) => (
            <ReviewCard key={index} reviewer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
