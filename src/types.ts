export type PageTab = 'home' | 'girlfriend' | 'colleague' | 'parents';

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  soldCount: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary' | 'hot' | 'trending';
  highlightTag?: string;
  psychologicalInsight: string;
  category: 'girlfriend' | 'colleague' | 'parents' | 'all';
  recipientTypes: string[];
  occasions: string[];
  vibes: string[];
  maxPriceTier: '< 150k' | '150k - 300k' | '300k - 500k' | '> 500k';
  shopeeUrl: string;
  shopeeLabel?: string;
  tiktokUrl: string;
  tiktokLabel?: string;
  matchScore?: number;
  features?: string[];
}

export interface QuizState {
  recipient: string;
  occasion: string;
  budget: string;
  vibe: string;
  searchQuery?: string;
}

export interface CardWish {
  id: string;
  title: string;
  category: string;
  content: string;
  icon: string;
  suitableFor: string;
}
