import { BlogPage } from '@/packages/blog';
import { LanguagesType } from '@/types/types';

async function News({ params: { lang } }: { params: LanguagesType }) {
  return <BlogPage lang={lang} />;
}

export default News;
