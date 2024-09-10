import Cookies from 'js-cookie';

const uploadImageToDB = async (data: any) => {
  try {
    const jwt = Cookies.get('jwt');

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: data,
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('File upload failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

export default uploadImageToDB;
