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
  <button class="comment-btn open-button" id="${meal.idMeal}">Comments</button>
  <button class="reservation-btn">Reservations</button>
</div>
</div>
`;

export const renderComments = (comments) => {
  const commentsContainer = document.createElement('ul');
  if (comments) {
    comments.forEach(({ username, creation_date, comment }) => {
      commentsContainer.innerHTML += `<li>${creation_date}   ${username} ${comment}</li>`;
    });
  }

  return commentsContainer;
};

export const mealDetails = (meal) => {
  const comments = renderComments(meal.comments);

  return `  
  <img
  src="${meal.strMealThumb}"
  alt=""
  />
  <h3>${meal.strMeal}</h3>
  
  <h4>comments(<span class='comments-counter'></span>)</h4>
  <div class='comments'>
    ${comments ? comments.outerHTML : ''}
  </div>

  <h5>Add a comment</h5>
  <form>
    <input id="username" type="text" placeholder="Your name" />
    <input id="comment" type="text" placeholder="Your comment" />
    <button type='submit' class="submit-btn" id="" >Comment<button />
    <input id="item_id" type="hidden" value='${meal.idMeal}' />
  </form>



  `;
};
