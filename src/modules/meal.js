export const createMeal = (meal) => `
<div class="meal">
<div class="image">
  <img src="${meal.strMealThumb}" alt="meal image" />
</div>

<div class="title">
  <h3>${meal.strMeal}</h3>
</div>
<div class="likes">
  <i class="fas fa-heart" id='${meal.idMeal}'></i>
  <span class="like-${meal.idMeal}">${meal.likes} </span>
  <span>Likes </span>
  
</div>


<div class="actions">
  <button class="comments open-button" id="${meal.idMeal}">Comments</button>
  <button class="reservation">Reservations</button>
</div>
</div>
`;

export const mealDetails = (meal) => `<img
src="${meal.strMealThumb}"
alt=""
/>
<h3>${meal.strMeal}</h3>`;