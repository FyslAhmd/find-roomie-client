import React from "react";
import carouselBg1 from "../assets/slider/bgimg1.jpg";
import carouselBg2 from "../assets/slider/BGIMG2.jpg";
import carouselBg3 from "../assets/slider/BGIMG3.jpg";

const Slider = () => {
  const stopScroll = (e, slideNo) => {
    e.preventDefault();
    document
      .querySelector(slideNo)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  return (
    <div className="carousel w-full my-4">
      <div id="slide1" className="carousel-item relative w-full rounded-xl">
        <img
          src={carouselBg1}
          className="absolute inset-0 h-full w-full object-cover brightness-[.4] rounded-xl"
          alt=""
        />
        <div className="absolute inset-0 z-10 flex items-center justify-around px-18 lg:px-10 text-white">
          <div className="max-w-md text-center">
            <h2 className="md:text-3xl font-bold">Smart Matchmaking</h2>
            <p className="mt-3 text-xs md:text-base leading-relaxed hidden md:block">
              Find your perfect roommate match with our intelligent matching
              system based on habits, preferences, and lifestyle.
            </p>
            <button className="text-xs md:text-base text-white bg-black mt-4 rounded px-4 py-2 hover:bg-gray-800 hover:scale-105">
              Explore More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
          <a
            href="#slide3"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, "#slide3")}
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, "#slide2")}
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full rounded-xl">
        <img
          src={carouselBg2}
          className="absolute inset-0 h-full w-full object-cover brightness-[.4] rounded-xl"
          alt=""
        />
        <div className="absolute inset-0 z-10 flex items-center justify-around px-18 lg:px-10 text-white">
          <div className="max-w-md text-center">
            <h2 className="md:text-3xl font-bold">Post Your Room</h2>
            <p className="mt-3 text-xs md:text-base leading-relaxed hidden md:block">
              Got a spare room? Post your listing in minutes and find the right
              roommate fast.
            </p>
            <button className="text-xs md:text-base text-white bg-black mt-4 rounded px-4 py-2 hover:bg-gray-800 hover:scale-105">
              Explore More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
          <a
            href="#slide1"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, "#slide1")}
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, "#slide3")}
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-xl">
        <div className="relative w-full h-full">
          <img
            src={carouselBg3}
            className="inset-0 h-[250px] w-full object-cover brightness-[.4] rounded-xl"
            alt=""
          />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-around px-18 lg:px-10 text-white">
          <div className="max-w-md text-center">
            <h2 className="md:text-3xl font-bold">Chat & Connect</h2>
            <p className="mt-3 text-xs md:text-base leading-relaxed hidden md:block">
              Built-in chat system lets you talk before moving in. Break the
              ice.
            </p>
            <button className="text-xs md:text-base text-white bg-black mt-4 rounded px-4 py-2 hover:bg-gray-800 hover:scale-105">
              Explore More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
          <a
            href="#slide2"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, "#slide2")}
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, "#slide1")}
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
