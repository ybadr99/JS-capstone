import "./style.css";
import { getMeals, getLikesItems } from "./modules/api";

const displayMeals = async () => {
  const meals = await getMeals();

  const items = await getLikesItems();
  const likedItems = [];
  meals.forEach((meal) => {
    const likedItem = items.find((item) => item.item_id == meal.idMeal);
    likedItems.push({ ...meal, ...likedItem });
  });

  likedItems.forEach((meal) => {
    document.querySelector(".meals").innerHTML += createMeal(meal);
  });
};

displayMeals();

const createMeal = (meal) => `
      <div class="meal">
      <div class="image">
        <img src="${meal.strMealThumb}" alt="meal image" />
      </div>

      <div class="title">
        <h3>${meal.strMeal}</h3>
      </div>
      <div class="likes">
        <i class="fas fa-heart"></i>
        <span>${meal.likes ? meal.likes : 0} Likes</span>
      </div>


      <div class="actions">
        <button class="comments">Comments</button>
        <button class="reservation">Reservations</button>
      </div>
    </div>
      `;
