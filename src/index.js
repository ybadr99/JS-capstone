import './style.css';
import { getMeals, addLike } from './modules/api.js';
import { createMeal, mealDetails } from './modules/meal.js';
import getComments from './modules/getComments.js';

// Rest of your code...

const loader = document.querySelector('.loading');
loader.classList.add('active');

const meals = await getMeals();

const likeInteract = (id) => {
  addLike(id);
  const likedMeal = meals.find((m) => m.idMeal === id);
  // eslint-disable-next-line no-plusplus
  document.querySelector(`.like-${id}`).textContent = ++likedMeal.likes;
};

meals.forEach((meal) => {
  document.querySelector('.meals').innerHTML += createMeal(meal);
  loader.classList.remove('active');
});

// like interactions
document.querySelectorAll('.fa-heart').forEach((item) => {
  item.addEventListener('click', (e) => {
    likeInteract(e.target.id);
  });
});

// modal
const modal = document.querySelector('#modal');
const openModal = document.querySelectorAll('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.forEach((item) => {
  item.addEventListener('click', async () => {
    // display the popup
    modal.showModal();
    // find the selected meal
    const meal = meals.find((m) => m.idMeal === item.id);

    // get comments
    const comments = await getComments(meal.idMeal);
    meal.comments = comments;
    // console.log("meal c", meal.comments);

    document.querySelector('.modal-content').innerHTML = mealDetails(meal);
  });
});

closeModal.addEventListener('click', () => {
  modal.close();
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
