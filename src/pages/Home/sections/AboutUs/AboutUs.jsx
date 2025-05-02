import "./AboutUs.css";
import Restuarant from "../../../../assets/restaurant.jpg";
import Chefs from "../../../../assets/chefs.jpg";

const story = [
  `We're a vibrant, Mediterranean-inspired restaurant passionate about bringing you authentic flavors and a warm, welcoming atmosphere. Our menu features delicious small plates, handcrafted pasta, and grilled specialties—made with fresh, high-quality ingredients. Come savor the taste of the Mediterranean with us!`,
  `Little Lemon was born from a love of travel and a passion for sharing the vibrant flavors of the Mediterranean. We believe dining should be an experience—a celebration of good food, great company, and life’s simple joys. So come, gather with friends and family, and let us transport you to the sun-drenched shores of the Mediterranean.`,
];

function AboutUs() {
  return (
    <section className="about-us">
      <div className="container about-us-container">
        <article className="about-us-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="about-us-story">
            {story.map((paragraph, index) => (
              <span key={index}>{paragraph}</span>
            ))}
          </p>
        </article>
        <div className="about-us-images">
          <div className="image-group">
            <img className="image1" src={Restuarant} alt="Restaurant-Image" />
            <img className="image2" src={Chefs} alt="Restaurant-Chefs" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
