import { NewsItemEntityResponseCollection } from '@/graphql/gql/graphql';

const getNextSlug = (
  allSlugs: NewsItemEntityResponseCollection['data'],
  currentSlug: string
) => {
  const slugs = allSlugs.map((item) => item?.attributes?.slug);
  const currentIndex = slugs.indexOf(currentSlug);
  const nextIndex = (currentIndex + 1) % slugs.length;
  return slugs[nextIndex];
};

export default getNextSlug;
