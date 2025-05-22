import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { AiOutlineLike } from "react-icons/ai";

const RoomDetails = () => {
  const data = useLoaderData();
  const [showContact, setShowContact] = useState(false);
  const [like, setLike] = useState(0);
  const {
    title,
    location,
    rentAmount,
    roomType,
    lifeStyle,
    description,
    contact,
    available,
    email,
    displayName,
  } = data;

  const handleLike = () => {
    setLike(like + 1);
    setShowContact(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-10 space-y-4">
      <div className="flex items-center justify-between px-4">
        <div>
          <p className="text-xl font-bold">{like} people interested in</p>
        </div>
        <div className="text-right">
          <button onClick={handleLike} className="btn text-white bg-black">
            <AiOutlineLike size={20} />
          </button>
          {showContact && (
            <div>
              <h4 className="font-semibold text-gray-700">
                Contact Info: {contact}
              </h4>
            </div>
          )}
        </div>
      </div>
      <hr className="h-0.5 border-0 bg-gray-500 mx-4"/>
      <h2 className="text-2xl font-bold text-center text-neutral-700">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-700">Posted By</h4>
          <p className="text-gray-600">{displayName}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-700">Email</h4>
          <p className="text-gray-600">{email}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-700">Location</h4>
          <p className="text-gray-600">{location}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-700">Rent Amount</h4>
          <p className="text-gray-600">${rentAmount}/month</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-700">Room Type</h4>
          <p className="text-gray-600">{roomType}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-700">
            Lifestyle Preferences
          </h4>
          <p className="text-gray-600">{lifeStyle}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-700">Availability</h4>
          <p
            className={`font-semibold ${
              available === "yes" ? "text-green-600" : "text-red-500"
            }`}
          >
            {available === "yes" ? "Available" : "Not Available"}
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold text-gray-700">Description</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
