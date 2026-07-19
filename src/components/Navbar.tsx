"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-t-2 border-purple-600">
      {/* Top Navbar */}
      <div className="border-b">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
         <Link
  href="/"
  className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
>
  Modenza
</Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="font-semibold">
              Home
            </Link>

            <Link
              href="/shop"
              className="text-gray-500 hover:text-black transition"
            >
              Shop
            </Link>

            <Link
              href="/about"
              className="text-gray-500 hover:text-black transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-500 hover:text-black transition"
            >
              Contacts
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-gray-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Category */}
          <button className="flex items-center gap-2 text-sm">
            <Menu size={18} />
            <span>Shop by Category</span>
          </button>

          {/* Search */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full rounded bg-white py-2 pl-4 pr-10 outline-none"
            />

            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="flex items-center">
              <User size={18} />
              <ChevronDown size={16} />
            </button>

            <button>
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;