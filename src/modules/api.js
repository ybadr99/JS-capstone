const baseApi = 'https://www.themealdb.com/api/json/v1/1';

export const getMeals = async () => {
  const response = await fetch(`${baseApi}/filter.php?a=Egyptian`);
  const { meals } = await response.json();
  return meals;
};

export const fetchMealDetails = async (mealId) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const { meals } = await response.json();
  if (meals && meals.length > 0) {
    return meals[0];
  }
  throw new Error('Meal details not found.');
};
