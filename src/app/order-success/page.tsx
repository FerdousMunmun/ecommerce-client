import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="mb-4 text-5xl font-bold text-green-600">
        🎉 Order Placed Successfully!
      </h1>

      <p className="mb-8 text-gray-600">
        Thank you for your purchase.
      </p>

      <Link
        href="/shop"
        className="rounded-lg bg-black px-8 py-3 text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
}