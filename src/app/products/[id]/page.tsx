import Image from "next/image";
import { getProductById } from "@/service/product";
import ProductAction from "@/components/ProductAction";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = await getProductById(id);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="h-[650px] w-full rounded-2xl object-cover shadow-xl"
        />

        <div className="flex flex-col justify-center">
          <span className="mb-2 text-sm uppercase tracking-widest text-gray-500">
            {product.brand}
          </span>

          <h1 className="text-5xl font-bold">{product.name}</h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600">
              ({product.rating})
            </span>
          </div>

          <p className="mt-6 text-4xl font-bold text-[#9C6B3F]">
            ${product.price}
          </p>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>

            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {product.brand}
            </p>

            <p>
              <span className="font-semibold">Stock:</span>{" "}
              <span
                className={
                  product.stock > 0
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out of Stock"}
              </span>
            </p>
          </div>

          <p className="mt-8 leading-8 text-gray-600">
            {product.description}
          </p>

       <ProductAction product={product} />
        </div>
      </div>
    </section>
  );
}