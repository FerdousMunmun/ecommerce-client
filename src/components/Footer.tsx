import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link
            href="/"
            className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
          >
            Modenza
          </Link>

            <p className="text-sm leading-7 text-gray-600">
              Premium furniture and lifestyle products designed to
              make your home more beautiful and comfortable.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-black hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-black hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-black hover:text-white"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-black hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Menu
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/shop">Shop</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>

              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Furniture</li>
              <li>Lighting</li>
              <li>Decoration</li>
              <li>Kitchen</li>
              <li>Electronics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-3 text-gray-600">
              <p>📞 +880 1234-567890</p>

              <p>📧 support@modenza.com</p>

              <p>
                📍 123 Commerce Street
                <br />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 border-t"></div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} OREBI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>

            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}