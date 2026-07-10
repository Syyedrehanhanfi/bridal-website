export default function sitemap() {
  // TODO: Replace with actual Website URL
  const WEBSITE_URL = 'https://rishimehndi.shop';

  return [
    {
      url: WEBSITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
