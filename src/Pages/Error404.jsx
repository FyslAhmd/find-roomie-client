import React, { useEffect } from "react";
import { Link } from "react-router";

const Error404 = () => {
  useEffect(() => {
    document.title = "App Store | Error";
  }, []);
  return (
    <div className="flex items-center justify-center p-10 min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-light mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
