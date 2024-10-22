export const getAllChats = async () => {
  try {
    const res = await fetch(`/api/get-all-chat`);
    return res.json();
  } catch (error) {
    console.error('Error');
    throw error;
  }
};
