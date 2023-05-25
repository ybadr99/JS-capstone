const InvolvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const getComments = async (itemId) => {
  const url = `${InvolvementApi}/comments?item_id=${itemId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to retrieve comments');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle the error gracefully
    console.error('Error fetching comments:', error);
    return [];
  }
};

export default getComments;
