import { BlogItemPage } from '@/packages/blogItem';
import { getMetaData } from '@/services';
import { LanguagesType } from '@/types/types';

export async function generateMetadata({
  params: { lang, blog },
}: {
  params: { lang: string; blog: string };
}) {
  const data = await getMetaData(lang, 'blog', blog);
  return data;
}

async function BlogItem({
  params: { lang, blog },
}: {
  params: { lang: LanguagesType; blog: string };
}) {
  return <BlogItemPage lang={lang} slug={blog} />;
}

export default BlogItem;
