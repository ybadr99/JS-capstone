const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/peHlM9hq9qKvsrh6N3Wm/comments';
export const getComments = async (itemId) => {
  try {
    const response = await fetch(`${url}?item_id=${itemId}`);

    if (!response.ok) {
      throw new Error('Failed to retrieve comments');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

export const addComment = async ({ item_id, username, comment }) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id, username, comment }),
    });

    if (!response.ok) {
      throw new Error('Failed to add comments');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
