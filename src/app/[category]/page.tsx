import Link from "next/link";
import { client } from "../lib/sanity";
import Image from "next/image";

interface SimplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
}

// Fetch products based on category
async function getData(category: string): Promise<SimplifiedProduct[]> {
  const query = `*[_type == "product" && category->name == "${category}"] {
        _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name
  }`;

  return client.fetch<SimplifiedProduct[]>(query);
}

// Dynamic page generation
export const dynamic = "force-dynamic";

// Define Next.js Page Props
interface PageProps {
  params: {
    category: string;
  };
}

// Category page component
export default async function CategoryPage({ params }: PageProps) {
  if (!params?.category) {
    return <p className="text-center text-xl font-semibold">Loading...</p>;
  }

  const category = decodeURIComponent(params.category);
  const data = await getData(category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products from {category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product.slug}`}
              className="group relative transform transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="aspect-square w-full overflow-hidden rounded-md lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
