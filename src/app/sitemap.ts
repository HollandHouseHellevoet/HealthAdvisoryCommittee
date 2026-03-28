import { MetadataRoute } from 'next';
import { members } from '@/data/members';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hac.rojasreport.com';

  const memberPages = members.map((m) => ({
    url: `${baseUrl}/members/${m.slug}`,
    lastModified: new Date('2026-03-28'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-28'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pattern-analysis`,
      lastModified: new Date('2026-03-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...memberPages,
  ];
}
