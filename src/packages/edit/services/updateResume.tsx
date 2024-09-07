import { authClient } from '@/graphql-client';
import {
  UpdateResumeItemMutation,
  UpdateResumeItemDocument,
} from '@/graphql/gql/graphql';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateResume = createAsyncThunk(
  'resume/updateResumeData',
  async ({ data, id }: { data: any; id: string }, thunkAPI) => {
    const variables = { data, id };

    try {
      const data = await authClient.request<UpdateResumeItemMutation>(
        UpdateResumeItemDocument,
        variables
      );
      return data.updateResumeItem?.data?.attributes;
    } catch (error) {
      console.error('GraphQL Error:', error);
      return thunkAPI.rejectWithValue('Failed to update resume');
   }
  }
);
