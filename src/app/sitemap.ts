import { MetadataRoute } from 'next';
import { ROUTERS } from '@/constants/routers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.baseUrl;

  const siteMapData = ROUTERS.flatMap((item) => {
    const slug = item.href === '/' ? '' : item.href;

    return [
      {
        url: `${baseUrl}/en${slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/pl${slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.9,
      },
    ];
  });

  return [
    {
      url: baseUrl ?? '',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...siteMapData,
  ];
}
