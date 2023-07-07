interface ProductType {
  title: string;
  category: string;
  price: number;
  quantity: number;
  sale?: boolean;
  salePrice?: number | null;
}

export { ProductType };
