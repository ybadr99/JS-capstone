import "./style.css";
import { getMeals, addLike } from "./modules/api.js";
import { createMeal } from "./modules/meal.js";

const loader = document.querySelector(".loading");
loader.classList.add("active");

let meals = await getMeals();

const likeInteract = (id) => {
  addLike(id);
  const likedMeal = meals.find((m) => m.idMeal === id);
  document.querySelector(`.like-${id}`).textContent = ++likedMeal.likes;
};

meals.forEach((meal) => {
  document.querySelector(".meals").innerHTML += createMeal(meal);
  loader.classList.remove("active");
});

// like interactions
document.querySelectorAll(".fa-heart").forEach((item) => {
  item.addEventListener("click", (e) => {
    likeInteract(e.target.id);
  });
});
