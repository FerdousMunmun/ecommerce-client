export interface Product {
  _id: string;
  name: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  discountPrice?: number;
  stock: number;
  description: string;
  rating: number;
  totalReviews: number;
  isNew: boolean;
  isFeatured: boolean;
  colors: string[];
  materials: string[];
  tags: string[];
  createdAt: string;
}