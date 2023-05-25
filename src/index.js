import './style.css';
import { getMeals, addLike } from './modules/api.js';
import { createMeal, mealDetails } from './modules/meal.js';
import counter from './modules/counter.js';

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
  item.addEventListener('click', () => {
    modal.innerHTML = ''; // Clear previous content of the modal
    // Display the popup
    modal.showModal();

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    modal.appendChild(closeButton);

    // Find the selected meal
    const meal = meals.find((m) => m.idMeal === item.id);
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = mealDetails(meal);
    modal.appendChild(modalContent);

    // Append the form to the modal content
    const formContainer = document.createElement('div');
    formContainer.classList.add('comment-form');
    formContainer.innerHTML = `
      <h2>Comments (<span class="comments-count"></span>)</h2>
      <form>
        <div class="form-group">
          <h2>Add a Comment</h2>
          <label for="txt-visitor">Name:</label>
          <input id="txt-visitor" type="text" placeholder="Your name" />
        </div>
        <div class="form-group">
          <label for="txt-comment">Comment:</label>
          <input id="txt-comment" type="text" placeholder="Your comment" />
        </div>
        <input id="launch-id" type="hidden" />
        <div class="form-group">
          <input class="comment" id="btn-save-comment" type="button" value="Comment" />
        </div>
      </form>
    `;
    modalContent.appendChild(formContainer);

    // Close modal when close button is clicked
    closeButton.addEventListener('click', () => {
      modal.close();
    });
  });
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
