export interface Product {
  id: number;
  title: string;
  price: number;
}

export default function getProductSortedByPrice(products: Product[]): Product[] {
  return products.slice().sort((a: Product, b: Product) => a.price - b.price);
}
