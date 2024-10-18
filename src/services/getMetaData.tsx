import { client } from '@/graphql-client';
import { MetadataDocument, MetadataQuery } from '@/graphql/gql/graphql';
import { createMetadata } from '@/utils';

export const getMetaData = async (
  locale: string,
  slug: string,
  params?: string
) => {
  try {
    const variables = {
      locale,
      slug,
    };

    const data = await client.request<MetadataQuery>(
      MetadataDocument,
      variables
    );

    const keywords = data.translation?.data?.attributes?.meta_keywords;
    const page = data.pages?.data?.[0]?.attributes;
    const ogImage =
      data.image?.data?.attributes?.ogImage?.data?.attributes?.url;
    const isMain = slug === 'home';
    const updatedSlug = !isMain ? `/${slug}` : '';
    const updatedData = {
      title: page?.title ?? '',
      description: page?.meta_description ?? '',
      keywords: keywords ?? '',
      ogImage: ogImage,
      canonical: `${process.env.baseUrl}/${locale}${updatedSlug}${
        params ? `/${params}` : ''
      }`,
    };

    const meta = createMetadata(updatedData);
    return meta;
  } catch (err) {
    console.log(err);
  }
};
