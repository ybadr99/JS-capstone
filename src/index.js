import './style.css';
import { getMeals, addLike } from './modules/api.js';

import { showCommentsPopup } from './modules/comments.js';
import { createMeal } from './modules/meal.js';

const loader = document.querySelector('.loading');
loader.classList.add('active');

const likeInteract = async (id) => {
  await addLike(id);
  const likedMeal = meals.find((m) => m.idMeal === id);
  if (likedMeal) {
    const likeElement = document.querySelector(`.like-${id}`);
    if (likeElement) {
      likeElement.textContent = ++likedMeal.likes;
    }
  }
};

const displayMeals = async () => {
  try {
    const meals = await getMeals();
    const mealsContainer = document.querySelector('.meals');

    meals.forEach((meal) => {
      const mealElement = createMeal(meal);
      mealsContainer.appendChild(mealElement);
    });

    loader.classList.remove('active');
  } catch (error) {
    console.error('Error displaying meals:', error);
  }
};

displayMeals();

// like interactions
document.querySelectorAll('.fa-heart').forEach((item) => {
  item.addEventListener('click', (e) => {
    likeInteract(e.target.id);
  });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('comments')) {
    const { mealId } = event.target.closest('.meal').dataset;
    showCommentsPopup(mealId);
  }
});