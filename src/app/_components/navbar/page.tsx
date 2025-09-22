"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { cartItems } = useCart();
  const router = useRouter();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    // فقط تغيير المسار إلى login
    router.push("/login");
  };

  if (!mounted) return null;

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2 text-2xl font-bold cursor-default">
          BookStore
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/store" className="hover:text-yellow-400">Store</Link>
          <Link href="/books" className="hover:text-yellow-400">Books</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link href="/cart" className="relative flex items-center gap-1 hover:text-yellow-400">
            <FaShoppingCart />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/orders" className="hover:text-yellow-400">Orders</Link>

          <button
            onClick={handleLogout}
            className="hover:text-yellow-400 font-semibold"
          >
            Logout
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-blue-800 px-6 py-4 flex flex-col gap-4">
          <Link href="/store" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Store</Link>
          <Link href="/books" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Books</Link>
          <Link href="/about" className="hover:text-yellow-400" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/cart" className="relative hover:text-yellow-400 flex items-center gap-1" onClick={() => setOpen(false)}>
            <FaShoppingCart />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/orders" className="hover:text-yellow-400" onClick={() => setOpen(false)}>Orders</Link>

          <button
            onClick={() => {
              setOpen(false);
              handleLogout();
            }}
            className="hover:text-yellow-400 font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
