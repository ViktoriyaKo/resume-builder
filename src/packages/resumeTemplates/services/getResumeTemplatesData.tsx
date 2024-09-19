import { client } from '@/graphql-client';
import {
  ResumeTemplatesDocument,
  ResumeTemplatesQuery,
} from '@/graphql/gql/graphql';

export const getResumeTemplatesData = async (
  locale: string,
  link: string | string[]
) => {
  try {
    const variables = {
      locale,
      link: link !== 'all' ? link : undefined,
    };

    const data = await client.request<ResumeTemplatesQuery>(
      ResumeTemplatesDocument,
      variables
    );
    return data;
  } catch (err) {
    console.log("Error");  }
};
