"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";
import bglogin from "../../images/pexels-mccutcheon-1148399.jpg";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        // ✅ simulate login with json-server
        await axios.post("http://localhost:5000/users", values);

        toast.success("✅ Login successful!", {
          position: "top-right",
          autoClose: 2000,
        });

        router.push("/store");
      } catch (err) {
        const error = err as AxiosError;
        console.error("Login error:", error.message);

        setErrors({ email: "❌ Invalid credentials" });
        toast.error("❌ Invalid credentials", {
          position: "top-right",
          autoClose: 2000,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.2), rgba(10,30,60,0.6)), url(${bglogin.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ToastContainer /> {/* ✅ لازم يتحط مره واحده في الصفحة */}

      {/* Glassmorphism Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-800 to-blue-900 bg-clip-text text-transparent drop-shadow-lg">
          Book Store Login
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-cyan-900">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-cyan-300/40 rounded-lg px-3 py-2 bg-white/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-400 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold text-cyan-900">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-cyan-300/40 rounded-lg px-3 py-2 bg-white/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-400 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-800 to-blue-900 text-white py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition shadow-lg shadow-cyan-600/40 disabled:opacity-50"
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
