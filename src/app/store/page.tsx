// src/app/store/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgheader from "../../images/pexels-element5-1370295.jpg";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  category: string;
}

export default function Page() {
  const { addToCart } = useCart();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch books with proper typing
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get<Record<string, Book[]>>("http://localhost:5000/books");

        if (res.data && typeof res.data === "object") {
          const allBooks: Book[] = Object.entries(res.data).flatMap(
            ([category, booksArray]) =>
              booksArray.map((b) => ({ ...b, category }))
          );
          setBooks(allBooks);
        } else {
          setError("Invalid data format from server");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch books");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const features = [
    { title: "Trusted Store", desc: "High-quality books from verified publishers." },
    { title: "Fast Delivery", desc: "Order books anytime and get fast delivery." },
    { title: "Affordable Prices", desc: "Discounts and special offers available." },
    { title: "Secure Payments", desc: "Your payments and data are always safe." },
    { title: "Diverse Collection", desc: "Novels, kids, science, and professional books." },
    { title: "Scribd", desc: "Subscription service for books & audiobooks." },
  ];

  const categories = Array.from(new Set(books.map((b) => b.category)));

  const handleAddToCart = (book: Book) => {
   addToCart({
     bookId: Number(book.id), // 🔹 المهم هنا
     title: book.title,
     author: book.author,
     price: book.price,
     image: book.image,
   });
 
   toast.success(`${book.title} added to cart!`, {
     position: "top-right",
     autoClose: 2000,
   });
 };

  return (
    <div>
      <ToastContainer />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative text-white"
        style={{ backgroundImage: `url(${bgheader.src})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-center max-w-2xl px-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-400">BookStore</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore a wide variety of books across all genres. Dive into your next adventure today.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Our Store?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <p className="text-center text-blue-600">Loading books...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : categories.length === 0 ? (
            <p className="text-center text-gray-500">No books available.</p>
          ) : (
            categories.map((category) => {
              const booksInCategory = books.filter((b) => b.category === category);
              return (
                <div key={category} className="mb-16">
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {category.toUpperCase()}
                  </motion.h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {booksInCategory.map((book, index) => (
                      <motion.div
                        key={book.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div>
                          <Image
                            src={book.image}
                            alt={book.title}
                            width={400}
                            height={300}
                            className="w-full h-56 object-cover rounded-t-xl"
                          />
                          <div className="p-4">
                            <h4 className="text-lg font-semibold">{book.title}</h4>
                            <p className="text-sm text-gray-500">{book.author}</p>
                            <p className="mt-2 text-yellow-600 font-bold">${book.price}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <button
                            onClick={() => handleAddToCart(book)}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg transition"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
