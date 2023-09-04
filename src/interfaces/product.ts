export interface Product {
  name: string;
  desc: string;
  vendor: string | null;
  price: number;
  discount: number | null;
  images: string;
}
