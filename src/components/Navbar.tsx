"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { getCartProducts } from "@/service/cartService";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const Navbar = () => {


  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();
const { data: session,isPendin } = authClient.useSession();

console.log({ session, isPending });
  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully");
    router.push("/");
  };

  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCartProducts();
      setCartCount(data.length);
    };

    fetchCart();
  }, []);
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
           {session ? (
  <div className="flex items-center gap-3">
    <Link
      href="/profile"
      className="flex items-center gap-2 hover:text-blue-600"
    >
      <User size={18} />
      <span className="hidden md:block">
        {session.user.name}
      </span>
    </Link>

    <button
      onClick={handleLogout}
      className="text-sm text-red-600 hover:underline"
    >
      Logout
    </button>
  </div>
) : (
  <div className="flex items-center gap-4">
    <Link
      href="/login"
      className="flex items-center gap-1 hover:text-blue-600"
    >
      <User size={18} />
      Login
    </Link>

    <Link
      href="/registration"
      className="hover:text-blue-600"
    >
      Register
    </Link>
  </div>
)}

            <Link href="/cart">
  <div className="relative cursor-pointer">
    <ShoppingCart size={24} />

    {cartCount > 0 && (
      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
        {cartCount}
      </span>
    )}
  </div>
</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;