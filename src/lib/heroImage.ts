import { getImage } from 'astro:assets';

const heroOptimized = await getImage({
  src: 'https://images.unsplash.com/photo-1742491387035-f658e8a2b7f4?fm=jpg&q=80&w=1800&auto=format&fit=crop',
  inferSize: true,
  width: 1800,
  format: 'webp',
});

export const heroImageUrl = heroOptimized.src;
