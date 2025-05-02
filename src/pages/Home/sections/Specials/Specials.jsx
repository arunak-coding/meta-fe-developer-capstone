import { Link } from "react-router-dom";
import MealCard from "../../../../components/MealCard/MealCard";

import "./Specials.css";
import pages from "../../../../utils/pages";
import GreekSalad from "../../../../assets/greek-salad.jpg";
import Bruschetta from "../../../../assets/bruschetta.jpg";
import LemonDessert from "../../../../assets/lemon-dessert.jpg";

const meals = [
  {
    name: "Greek Salad",
    image: GreekSalad,
    price: "$12.99",
    description: `A refreshing mix of crisp lettuce, juicy tomatoes, cucumbers, olives, and creamy feta, topped with homemade croutons and a drizzle of olive oil.`,
  },
  {
    name: "Bruschetta",
    image: Bruschetta,
    price: "$5.99",
    description: `Toasted artisan bread topped with a vibrant blend of diced tomatoes, fresh basil, garlic, and a hint of balsamic glaze.`,
  },
  {
    name: "Lemon Dessert",
    image: LemonDessert,
    price: "$5.00",
    description: `A zesty, melt-in-your-mouth lemon custard served with a delicate shortbread crumble, inspired by a treasured family recipe.`,
  },
];

function WeekSpecials() {
  return (
    <section className="week-specials">
      <div className="container week-specials-container">
        <div className="week-specials-header">
          <h2>Specials</h2>
          <Link className="button-primary" to={pages.get("menu").path}>
            Online Menu
          </Link>
        </div>
        <div className="meal-card-container">
          {meals.map((meal, index) => (
            <MealCard key={index} item={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeekSpecials;
