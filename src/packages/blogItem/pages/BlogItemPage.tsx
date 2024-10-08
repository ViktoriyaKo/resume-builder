import { getBlogItemData } from '../services/getBlogItemData';
import { notFound } from 'next/navigation';
import { Article, Hero } from '../components';
import { Blog } from '@/graphql/gql/graphql';
import { LanguagesType } from '@/types/types';

interface IProps {
  slug: string;
  lang: LanguagesType;
}

const BlogItemPage = async (props: IProps) => {
  const { lang, slug } = props;
  const data = await getBlogItemData(lang, slug);
  const { blogs } = data ?? {};
  const blogsItem = blogs?.data?.[0].attributes as Blog;

  if (!data) {
    notFound();
  }

  return (
    <>
      <Hero blog={blogsItem} />
      <Article content={blogsItem.content ?? ''} author={blogsItem?.author ?? ''} />
    </>
  );
};

export default BlogItemPage;
