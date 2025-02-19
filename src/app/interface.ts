export interface simplifiedProduct {
    map(arg0: (product: { _id: import("react").Key | null | undefined; imageUrl: string | import("next/dist/shared/lib/get-img-props").StaticImport; }) => void): import("react").ReactNode;
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
  }

export interface fullProduct {
   _id: string;
   images: any;
   price: number;
   slug: string;
   categoryName: string;
   name: string;
   description: string;
   price_id: string;
}