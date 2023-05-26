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

const renderComments = (comments) => {
  const commentsContainer = document.createElement('ul');
  if (comments) {
    comments.forEach((comment) => {
      console.log(comment);
      commentsContainer.innerHTML += `<li>${comment.creation_date}   ${comment.username} ${comment.comment}</li>`;
    });
  }

  return commentsContainer;
};

export const mealDetails = (meal) => {
  const comments = renderComments(meal.comments);

  console.log(comments);

  return `
  
  <img
  src="${meal.strMealThumb}"
  alt=""
  />
  <h3>${meal.strMeal}</h3>
  
  <div class='comments'>
    <h4>comments(2)</h4>
    ${comments ? comments.outerHTML : ''}
  </div>

  `;
};
