import './style.css';
import { getMeals, addLike } from './modules/api.js';
import { createMeal, mealDetails, renderComments } from './modules/meal.js';
import counter from './modules/counter.js';
import { addComment, getComments } from './modules/commentsApi.js';

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

counter(document.querySelector('.home-counter'), meals);

// modal
const modal = document.querySelector('#modal');
const openModal = document.querySelectorAll('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.forEach((item) => {
  item.addEventListener('click', async () => {
    modal.showModal();
    const meal = meals.find((m) => m.idMeal === item.id);
    const comments = await getComments(meal.idMeal);
    meal.comments = comments;

    document.querySelector('.modal-content').innerHTML = mealDetails(meal);
    counter(document.querySelector('.comments-counter'), comments);

    // add comment
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', async (e) => {
      e.preventDefault();
      const item_id = e.target.elements.item_id.value;
      const username = e.target.elements[0].value;
      const comment = e.target.elements[1].value;
      const newComment = {
        item_id,
        username,
        comment,
      };
      addComment(newComment);

      formEl.reset();
      const comments = await getComments(meal.idMeal);
      document.querySelector('.comments').innerHTML = renderComments([
        ...comments,
        newComment,
      ]).outerHTML;
      counter(document.querySelector('.comments-counter'), [
        ...comments,
        newComment,
      ]);
    });
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
