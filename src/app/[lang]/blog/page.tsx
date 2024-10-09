import { BlogPage } from '@/packages/blog';
import { getMetaData } from '@/services';
import { LanguagesType } from '@/types/types';

export async function generateMetadata({
  params: { lang },
}: {
  params: LanguagesType;
}) {
  const data = await getMetaData(lang, 'blog');
  return data;
}

async function Blog({ params: { lang } }: { params: LanguagesType }) {
  return <BlogPage lang={lang} />;
}

export default Blog;
