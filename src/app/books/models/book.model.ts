export interface Book {
  id: string;
  name: string;
  description: string;
  releaseDate: string;
  price: {
    amount: number;
    currency: string;
  };
  category: string;
  author: string;
}
