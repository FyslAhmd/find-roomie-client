import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Steps = () => {
  return (
    <div className="bg-base-300 text-base-content rounded-xl my-10 px-8 py-10">
      <div className="text-center">
        <h2 className="font-sans text-3xl font-bold text-center">
          Find your ideal{" "}
          <span className="text-green-700">
            <Typewriter
              words={["roommate", "flatmate", "house partner"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-lg my-4">
          Our platform makes it easy for students to post, browse, and connect
          with potential roommates or find available rooms hassle-free.
        </p>
      </div>
      <div className="grid gap-8 mb-8 grid-cols-4">
        <div className="p-5 duration-300 transform bg-base-100 rounded-lg shadow-lg hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Create Your Profile</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded">
              1
            </p>
          </div>
          <p className="text-sm">
            Sign up and share details like your name, contact, lifestyle
            preferences, and location.
          </p>
        </div>

        <div className="p-5 duration-300 transform bg-base-100 rounded-lg shadow-lg hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">
              Post or Browse Listings
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded">
              2
            </p>
          </div>
          <p className="text-sm">
            Either list your room for rent or explore available rooms posted by
            others.
          </p>
        </div>

        <div className="p-5 duration-300 transform bg-base-100  rounded-lg shadow-lg hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Connect & Communicate</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded">
              3
            </p>
          </div>
          <p className="text-sm">
            Chat with potential roommates or room owners directly to ask
            questions and confirm details.
          </p>
        </div>

        <div className="p-5 duration-300 transform bg-base-100 rounded-lg shadow-lg hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Move In & Live Easy</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded">
              4
            </p>
          </div>
          <p className="text-sm">
            Finalize the agreement, pack your bags, and enjoy your new home with
            your ideal roommate.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/browseListing"
          className="btn bg-black text-white hover:bg-gray-800 hover:scale-105"
        >
          Browse Rooms
        </Link>
      </div>
    </div>
  );
};

export default Steps;
