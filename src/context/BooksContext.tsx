"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// ✅ Define book type
interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
}

// ✅ Define context type
interface BooksContextType {
  books: Record<string, Book[]>; // categories with arrays of books
  loading: boolean;
  error: string | null;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

// ✅ Provider
export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Record<string, Book[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books"); // JSON server
        setBooks(res.data); 
        setLoading(false);
      } catch {
  setError("Failed to load books");
  setLoading(false);
}
    };

    fetchBooks();
  }, []);

  // ✅ Prevent hydration mismatch
  if (!mounted) {
    return (
      <BooksContext.Provider value={{ books: {}, loading: true, error: null }}>
        {children}
      </BooksContext.Provider>
    );
  }

  return (
    <BooksContext.Provider value={{ books, loading, error }}>
      {children}
    </BooksContext.Provider>
  );
};

// ✅ Custom Hook
export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used inside BooksProvider");
  }
  return context;
};
