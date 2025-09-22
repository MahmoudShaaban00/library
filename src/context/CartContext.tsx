"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  id: number;
  bookId: number;
  title: string;
  author: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  loading: boolean;
  totalPrice: number;
  fetchCart: () => Promise<void>;
  addToCart: (book: Omit<CartItem, "id" | "quantity">) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  increaseQuantity: (item: CartItem) => Promise<void>;
  decreaseQuantity: (item: CartItem) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch cart
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/cart");
      setCartItems(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ Add to cart
  const addToCart = async (book: Omit<CartItem, "id" | "quantity">) => {
    const existing = cartItems.find((item) => item.bookId === book.bookId);

    if (existing) {
      await increaseQuantity(existing);
    } else {
      await axios.post("http://localhost:5000/cart", {
        ...book,
        quantity: 1,
      });
      fetchCart();
    }
  };

  // ✅ Remove item
  const removeFromCart = async (id: number) => {
    await axios.delete(`http://localhost:5000/cart/${id}`);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // ✅ Increase quantity
  const increaseQuantity = async (item: CartItem) => {
    const updated = { ...item, quantity: item.quantity + 1 };
    await axios.put(`http://localhost:5000/cart/${item.id}`, updated);
    setCartItems(cartItems.map((ci) => (ci.id === item.id ? updated : ci)));
  };

  // ✅ Decrease quantity
  const decreaseQuantity = async (item: CartItem) => {
    if (item.quantity > 1) {
      const updated = { ...item, quantity: item.quantity - 1 };
      await axios.put(`http://localhost:5000/cart/${item.id}`, updated);
      setCartItems(cartItems.map((ci) => (ci.id === item.id ? updated : ci)));
    }
  };

  // ✅ Clear all cart
  const clearCart = async () => {
    for (const item of cartItems) {
      await axios.delete(`http://localhost:5000/cart/${item.id}`);
    }
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        totalPrice,
        fetchCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
