import React from "react";

const Newsletter = () => {
  return (
    <div className="my-6 rounded-xl overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full">
        <img
          src="https://i.ibb.co/4sYZ8gC/img-2.png"
          alt="room"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 w-full bg-gray-800 bg-opacity-80 px-4 py-10 md:px-12 md:py-16 lg:mx-24 lg:my-20 rounded-xl text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Don’t miss out!</h2>
          <p className="mt-4 text-sm md:text-base">
            Subscribe to our newsletter to stay in the loop. We send updates
            once a week every Friday, so you’ll never miss anything important.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
