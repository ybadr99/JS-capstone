const baseApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian';
const apiId = 'peHlM9hq9qKvsrh6N3Wm';
const InvolvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const getMeals = async () => {
  const data = await fetch(baseApi);
  const { meals } = await data.json();
  return meals;
};

export const getLikesItems = async () => {
  const data = await fetch(`${InvolvementApi}apps/${apiId}/likes`);
  const items = await data.json();

  return items;
};

export const like = async (id) => {
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
