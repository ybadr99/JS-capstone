export const createMeal = (meal) => {
  return `
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
  <button class="comments">Comments</button>
  <button class="reservation">Reservations</button>
</div>
</div>
`;
};
