import React, { useEffect, useState, useRef } from "react";
import carouselBg1 from "../assets/slider/bgimg1.jpg";
import carouselBg2 from "../assets/slider/BGIMG2.jpg";
import carouselBg3 from "../assets/slider/BGIMG3.jpg";
import { Link } from "react-router";

const Slider = () => {
  const slides = ["slide1", "slide2", "slide3"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Auto scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);

      const container = carouselRef.current;
      const slideEl = document.getElementById(slides[nextSlide]);
      if (container && slideEl) {
        container.scrollTo({
          left: slideEl.offsetLeft,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const stopScroll = (e, index) => {
    e.preventDefault();
    setCurrentSlide(index);
    const container = carouselRef.current;
    const slideEl = document.getElementById(slides[index]);
    if (container && slideEl) {
      container.scrollTo({
        left: slideEl.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={carouselRef}
      className="carousel flex overflow-x-auto snap-x snap-mandatory w-full my-4 rounded-xl scroll-smooth"
    >
      {/* Slide 1 */}
      <div
        id="slide1"
        className="carousel-item snap-center shrink-0 w-full h-[400px] relative rounded-xl overflow-hidden"
      >
        <img
          src={carouselBg2}
          className="absolute inset-0 h-full w-full object-cover brightness-[.4]"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10 flex items-center justify-around px-4 lg:px-10 text-white">
          <div className="max-w-md text-center">
            <h2 className="md:text-3xl font-bold">Post Your Room</h2>
            <p className="mt-3 text-xs md:text-base leading-relaxed">
              Got a spare room? Post your listing in minutes and find the right
              roommate fast.
            </p>
            <Link to="/browseListing">
              <button className="text-xs md:text-base rounded-xl text-white bg-black mt-4 px-4 py-2 hover:bg-gray-800 hover:scale-105">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
          <a
            href="#slide3"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, 2)}
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, 1)}
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        id="slide2"
        className="carousel-item snap-center shrink-0 w-full h-[400px] relative rounded-xl overflow-hidden"
      >
        <img
          src={carouselBg1}
          className="absolute inset-0 h-full w-full object-cover brightness-[.4]"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10 flex items-center justify-around px-4 lg:px-10 text-white">
          <div className="max-w-md text-center">
            <h2 className="md:text-3xl font-bold">Smart Matchmaking</h2>
            <p className="mt-3 text-xs md:text-base leading-relaxed">
              Find your perfect roommate match with our intelligent matching
              system based on habits, preferences, and lifestyle.
            </p>
            <Link to="/browseListing">
              <button className="text-xs rounded-xl md:text-base text-white bg-black mt-4 px-4 py-2 hover:bg-gray-800 hover:scale-105">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
          <a
            href="#slide1"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, 0)}
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, 2)}
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        id="slide3"
        className="carousel-item snap-center shrink-0 w-full h-[400px] relative rounded-xl overflow-hidden"
      >
        <img
          src={carouselBg3}
          className="absolute inset-0 h-full w-full object-cover brightness-[.4]"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10 flex items-center justify-around px-4 lg:px-10 text-white">
          <div className="max-w-md text-center">
            <h2 className="md:text-3xl font-bold">Chat & Connect</h2>
            <p className="mt-3 text-xs md:text-base leading-relaxed">
              Built-in chat system lets you talk before moving in. Break the
              ice.
            </p>
            <Link to="/browseListing">
              <button className="text-xs md:text-base text-white bg-black mt-4 rounded-xl px-4 py-2 hover:bg-gray-800 hover:scale-105">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
          <a
            href="#slide2"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, 1)}
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle"
            onClick={(e) => stopScroll(e, 0)}
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
