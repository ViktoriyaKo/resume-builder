import { LanguagesType } from '@/types/types';
import { getBlogData } from '../services/getBlogData';
import { notFound } from 'next/navigation';
import { Blog } from '../components';
import { BlogEntity } from '@/graphql/gql/graphql';
import { Hero } from '@/ui/molecules';

const BlogPage = async (props: LanguagesType) => {
  const { lang } = props;
  const data = await getBlogData(lang);

  if (!data) {
    notFound();
  }

  const { blogs } = data;
  const blogItems = blogs?.data as BlogEntity[];

  return (
    <>
      <Hero title={'Blog'} />
      <Blog blogItems={blogItems} />
    </>
  );
};

export default BlogPage;
