import './style.css';
import { getMeals, fetchMealDetails } from './modules/api.js';

const displayMeals = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    document.querySelector('.meals').innerHTML += createMeal(meal);
  });
  console.log(meals);
};

displayMeals();

const createMeal = (meal) => `
    <div class="meal" data-meal-id="${meal.idMeal}">
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

const showCommentsPopup = async (mealId) => {
  try {
    const mealDetails = await fetchMealDetails(mealId);
    const popupContent = document.createElement('div');
    popupContent.classList.add('launch-card');
    popupContent.innerHTML = `
       <button class="close-modal">&times;</button>      
      <div class="launch-img">
  
        <img class="image-popup" src="${mealDetails.strMealThumb}" alt="meal image" />
      </div>
      <div id="comment">
        <h2>${mealDetails.strMeal}</h2>
    
        <h2>Comments (<span class="comments-count"></span>)</h2>
        <ul class="commentList">
        </ul>
        <div class="entry">
          <h2>Add a Comment</h2>
          <form>
            <div class="form-group">
              <label for="txt-visitor">Name:</label>
              <input id="txt-visitor" type="text" placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="txt-comment">Comment:</label>
              <input id="txt-comment" type="text" placeholder="Your comment" />
            </div>
            <input id="launch-id" type="hidden" />
            <div class="form-group">
              <input class="comments" id="btn-save-comment" type="button" value="Comment" />
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(popupContent);

    const closePopupButton = popupContent.querySelector('.close-modal');
    closePopupButton.addEventListener('click', () => {
      document.body.removeChild(popupContent);
    });

    console.log(mealDetails);
  } catch (error) {
    console.error('Error fetching meal details:', error);
  }
};

// Add event listener to the parent element that wraps the comments buttons
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('comments')) {
    const { mealId } = event.target.closest('.meal').dataset;
    showCommentsPopup(mealId);
  }
});