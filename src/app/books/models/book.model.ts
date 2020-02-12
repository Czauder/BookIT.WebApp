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
  tags: Array<string>;
  pageCount: number;
  imageUrl: string;
}
