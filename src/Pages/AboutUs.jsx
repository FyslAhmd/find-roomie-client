import Lottie from "lottie-react";
import React from "react";
import animationData from "../assets/aboutus.json";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden z-50 pt-6 px-4 my-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:max-w-xl text-center lg:text-left z-10">
          <p className="text-xl uppercase tracking-wider">About Us</p>
          <h2 className="text-4xl md:text-5xl font-light leading-snug mt-3">
            We help you find the{" "}
            <span className="inline-block px-4 font-bold border-b-8 border-green-500 text-green-600">
              perfect roommate
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-justify">
            At FindMyRoomie, we believe that finding the perfect roommate should
            be simple, safe, and stress-free. Our platform connects like-minded
            individuals based on preferences, lifestyle, and location to help
            you build a comfortable and trustworthy living environment.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="/"
              className="inline-block bg-black rounded-xl px-6 py-3 text-white font-medium"
            >
              View More
            </a>
            <a
              href="/"
              className="group inline-flex items-center text-green-700 font-semibold"
            >
              Watch how it works
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative w-1/2 z-10">
          <div className="overflow-hidden">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <h1 className="hidden lg:block absolute text-[10rem] font-bold top-4 left-1/4 opacity-5 text-green-500 select-none -z-10">
        About Us
      </h1>
    </div>
  );
};

export default AboutUs;
