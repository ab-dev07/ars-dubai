export interface Strategy {
  name: string;
  description: string;
  winRate: string;
  avgReturn: string;
  riskLevel: string;
  timeframe: string;
  icon: string;
  color: string;
  features: string[];
  chart: Array<{ day: string; profit: number }>;
}

export interface Student {
  name: string;
  age: number;
  location: string;
  profession: string;
  before: string;
  after: string;
  timeframe: string;
  image: string | any;
  quote: string;
  profit: string;
  color: string;
}

export interface Book {
  title: string;
  subtitle: string;
  price: string;
  rating: string;
  reviews: string;
  pages: string;
  published: string;
  cover: string;
  description: string;
  bestseller: boolean;
  downloads: string;
}

export interface Video {
  title: string;
  platform: string;
  views: string;
  likes: string;
  thumbnail: string;
  duration: string;
  viral: boolean;
  src: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  views: string;
  likes: string;
  comments: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
  icon: string;
  color: string;
}
