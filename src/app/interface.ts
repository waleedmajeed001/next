export interface simplifiedProduct {
  map(arg0: (product: { _id: string; imageUrl: string }) => void): React.ReactNode;
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any; // Ensure images are stored as an array of URLs
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}
