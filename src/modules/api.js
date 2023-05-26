const baseApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian';
const apiId = 'peHlM9hq9qKvsrh6N3Wm';
const InvolvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const getLikesItems = async () => {
  try {
    const data = await fetch(`${InvolvementApi}apps/${apiId}/likes`);
    const items = await data.json();
    return items;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMeals = async () => {
  const data = await fetch(baseApi);
  const { meals } = await data.json();

  const items = await getLikesItems();

  meals.forEach((meal) => {
    const item = items.find((item) => item.item_id === meal.idMeal);
    if (item) {
      meal.likes = item.likes;
    } else {
      meal.likes = 0;
    }
  });

  return meals;
};

export const addLike = async (id) => {
  try {
    const response = await fetch(`${InvolvementApi}apps/${apiId}/likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
