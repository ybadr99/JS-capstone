import "./style.css";
import { getMeals } from "./modules/api";

const displayMeals = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    document.querySelector(".meals").innerHTML += createMeal(meal);
  });
  console.log(meals);
};

displayMeals();

const createMeal = (meal) => {
  return `
      <div class="meal">
      <div class="image">
        <img src="${meal.strMealThumb}" alt="meal image" />
      </div>

      <div class="title">
        <h3>${meal.strMeal}</h3>
      </div>

      <div class="actions">
        <button class="comments">Comments</button>
        <button class="reservation">Reservations</button>
      </div>
    </div>
      `;
};
// <div class="description">
//   <p></p>
// </div>
// <div class="likes">
//   <i class="fas fa-heart"></i>
//   <span>50 Likes</span>
// </div>
