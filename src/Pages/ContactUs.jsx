import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-start px-4 my-24">
      <ToastContainer />
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-medium">Contact Us</h1>
        <p className="mt-3">
          Email us at{" "}
          <a
            href="mailto:faiz4121820@gmail.com"
            className="text-blue-600 underline"
          >
            faiz4121820@gmail.com
          </a>{" "}
          or message us here:
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your Name"
              />
            </div>
            <div className="relative z-0">
              <input
                type="email"
                name="email"
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your email"
              />
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-black px-10 py-2 text-white hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
