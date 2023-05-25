export const createMeal = (meal) => {
  const mealElement = document.createElement('div');
  mealElement.classList.add('meal');
  mealElement.dataset.mealId = meal.idMeal;

  const imageElement = document.createElement('div');
  imageElement.classList.add('image');
  const image = document.createElement('img');
  image.src = meal.strMealThumb;
  image.alt = 'meal image';
  imageElement.appendChild(image);

  const titleElement = document.createElement('div');
  titleElement.classList.add('title');
  const title = document.createElement('h3');
  title.textContent = meal.strMeal;
  titleElement.appendChild(title);

  const likesElement = document.createElement('div');
  likesElement.classList.add('likes');
  const likeIcon = document.createElement('i');
  likeIcon.classList.add('fas', 'fa-heart');
  likeIcon.id = meal.idMeal;
  const likeCount = document.createElement('span');
  likeCount.classList.add(`like-${meal.idMeal}`);
  likeCount.textContent = meal.likes;
  const likesText = document.createElement('span');
  likesText.textContent = ' Likes';
  likesElement.appendChild(likeIcon);
  likesElement.appendChild(likeCount);
  likesElement.appendChild(likesText);

  const actionsElement = document.createElement('div');
  actionsElement.classList.add('actions');
  const commentsButton = document.createElement('button');
  commentsButton.classList.add('comments');
  commentsButton.textContent = 'Comments';
  const reservationButton = document.createElement('button');
  reservationButton.classList.add('reservation');
  reservationButton.textContent = 'Reservations';
  actionsElement.appendChild(commentsButton);
  actionsElement.appendChild(reservationButton);

  mealElement.appendChild(imageElement);
  mealElement.appendChild(titleElement);
  mealElement.appendChild(likesElement);
  mealElement.appendChild(actionsElement);

  return mealElement;
};

export default createMeal;
