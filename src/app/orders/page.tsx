// src/app/orders/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Order {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get<Order[]>("http://localhost:5000/orders");
        if (Array.isArray(res.data)) {
          setOrders(res.data);
          if (res.data.length === 0) toast.info("No orders found.");
        } else {
          setOrders([]);
          toast.info("No orders found.");
        }
      } catch (err: unknown) {
        const axiosErr = err as AxiosError;
        setError(axiosErr.message || "Failed to fetch orders");
        toast.error("Failed to load orders!");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center text-blue-600 mt-10">Loading orders...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold text-center mb-8">📦 Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">{order.name}</h2>
                <p className="text-gray-600">Email: {order.email}</p>
                <p className="text-gray-600">Phone: {order.phone}</p>
                <p className="text-gray-600">Address: {order.address}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold">
                  Order ID: {order.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
