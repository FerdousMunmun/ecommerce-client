import ShopSidebar from "@/components/ShopSidebar";
import ShopProducts from "@/components/ShopProducts";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-10 text-4xl font-bold">
        Shop
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

        <ShopSidebar />

        <div className="lg:col-span-3">

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Shop Products
            </h2>

            <span className="text-gray-500">
              {18} Products
            </span>
          </div>

          <ShopProducts
  search={params.search}
  category={params.category}
/>

        </div>

      </div>
    </section>
  );
}