import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-600">
          Learn more about our company and what we do.
        </p>
      </div>

      {/* Story */}
      <div className="mb-16">
        <h2 className="mb-4 text-3xl font-bold">Our Story</h2>

        <p className="leading-8 text-gray-600">
          We are committed to providing quality products at affordable prices.
          Our goal is to make online shopping easy, secure, and enjoyable for
          every customer.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Why Choose Us</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">
              Premium Quality
            </h3>

            <p className="text-gray-600">
              Carefully selected products for every customer.
            </p>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">
              Fast Delivery
            </h3>

            <p className="text-gray-600">
              Quick and reliable shipping across the country.
            </p>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">
              Secure Payment
            </h3>

            <p className="text-gray-600">
              Safe and trusted payment methods.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center">
        <Link
          href="/shop"
          className="rounded-lg bg-black px-8 py-3 text-white transition hover:bg-gray-800"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}