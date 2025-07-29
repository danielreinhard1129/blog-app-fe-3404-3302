export interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  thumbnail: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
