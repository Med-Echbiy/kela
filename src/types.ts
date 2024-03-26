export interface Product_Image {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface Product {
  description: string;
  product_images: Product_Image[];
  _id: string;
  product_name: string;
  price: number;
  availability: {
    inStock: boolean;
    quantity: number;
  };
  categories: string;
  onSale: {
    is_sale: boolean;
    salePrice: number;
  };
}

export interface CartProdutcPreview {
  description: string;
  product_images: Product_Image[];
  _id: string;
  product_name: string;
  price: number;
  availability: {
    inStock: boolean;
    quantity: number;
  };
  categories: string;
  onSale: {
    is_sale: boolean;
    salePrice: number;
  };
  quantity: number;
}
