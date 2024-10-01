import { BlogItemPage } from '@/packages/blogItem';
import { LanguagesType } from '@/types/types';

async function BlogItem({
  params: { lang, blog },
}: {
  params: { lang: LanguagesType; blog: string };
}) {
  return <BlogItemPage lang={lang} slug={blog} />;
}

export default BlogItem;
