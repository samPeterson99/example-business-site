interface ProductType {
  title: String;
  category: String;
  price: number;
  quantity: number;
  sale?: boolean;
  salePrice?: number | null;
}

export { ProductType };
