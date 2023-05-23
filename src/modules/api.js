const baseApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian';

export const getMeals = async () => {
  const data = await fetch(baseApi);
  const { meals } = await data.json();
  return meals;
};
