"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h4 className="font-bold text-2xl">📚 Al-Reads</h4>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Your independent bookstore — offering historical, detective, love,
            Islamic, programming, and brain games books with passion and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold text-lg mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/checkout" className="hover:text-white transition">Checkout</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-semibold text-lg mb-3">Contact</h5>
          <p className="text-sm text-gray-400">📍 Cairo, Egypt</p>
          <p className="text-sm text-gray-400">📧 mahmoudshabankk010@gmail.com</p>
          <p className="text-sm text-gray-400">📞 01027938060</p>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="font-semibold text-lg mb-3">Follow Us</h5>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Al-Reads — All rights reserved.
      </div>
    </footer>
  );
}
