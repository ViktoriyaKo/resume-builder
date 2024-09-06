import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const getCurrentResume = createAsyncThunk(
  'resume/getCurrentResume',
  async (id: string, thunkAPI) => {
    try {
      const jwt = Cookies.get('jwt');

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me?populate[resume_items][populate]=*&populate[resume_items][filters][id][$eq]=${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const data = await response.json();
      console.log('current-resume', data?.resume_items[0]);
      return data?.resume_items[0];
    } catch (e) {
      return thunkAPI.rejectWithValue('ERROR');
    }
  }
);
