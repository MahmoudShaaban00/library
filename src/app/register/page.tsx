"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";
import bglogin from "../../images/pexels-pixabay-159711.jpg";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Define form values type
interface RegisterFormValues {
  name: string;
  phone: string;
  address: string;
  email: string;
  password: string;
}

// ✅ Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be valid")
    .required("Phone is required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function RegisterPage() {
  const router = useRouter();

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // 👇 Save user to JSON Server
        const res = await axios.post("http://localhost:5000/users", values);

        toast.success("✅ Registration successful!");
        console.log("Response:", res.data);

        resetForm(); // Clear form
        setTimeout(() => router.push("/login"), 1500);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const err = error as AxiosError<{ message?: string }>;
          toast.error("❌ " + (err.response?.data?.message || "Request failed"));
        } else {
          toast.error("❌ Something went wrong!");
        }
        console.error("Register error:", error);
      }
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.2), rgba(10,30,60,0.6)), url(${bglogin.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-cyan-100">Name</label>
          <input
            type="text"
            {...formik.getFieldProps("name")}
            className="w-full p-2 border border-cyan-300/40 rounded-lg mt-1 bg-white/80 focus:ring-2 focus:ring-cyan-400"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-300 text-sm">{formik.errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-cyan-100">Phone</label>
          <input
            type="text"
            {...formik.getFieldProps("phone")}
            className="w-full p-2 border border-cyan-300/40 rounded-lg mt-1 bg-white/80 focus:ring-2 focus:ring-cyan-400"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-300 text-sm">{formik.errors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-cyan-100">Address</label>
          <input
            type="text"
            {...formik.getFieldProps("address")}
            className="w-full p-2 border border-cyan-300/40 rounded-lg mt-1 bg-white/80 focus:ring-2 focus:ring-cyan-400"
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-300 text-sm">{formik.errors.address}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-cyan-100">Email</label>
          <input
            type="email"
            {...formik.getFieldProps("email")}
            className="w-full p-2 border border-cyan-300/40 rounded-lg mt-1 bg-white/80 focus:ring-2 focus:ring-cyan-400"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-300 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-cyan-100">Password</label>
          <input
            type="password"
            {...formik.getFieldProps("password")}
            className="w-full p-2 border border-cyan-300/40 rounded-lg mt-1 bg-white/80 focus:ring-2 focus:ring-cyan-400"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-300 text-sm">{formik.errors.password}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition shadow-lg shadow-cyan-600/40 disabled:opacity-50"
        >
          {formik.isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>

      {/* ✅ Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </div>
  );
}
