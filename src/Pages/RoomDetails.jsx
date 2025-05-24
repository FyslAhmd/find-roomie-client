import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AiOutlineLike } from "react-icons/ai";
import AuthContext from "../provider/AuthContext";

const RoomDetails = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const [showContact, setShowContact] = useState(false);
  const [like, setLike] = useState(data.like || 0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    _id,
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
    if (user.email === email) return;
    const newLikeCount = like + 1;
    setLike(newLikeCount);
    fetch(`https://roommate-finder-server-phi.vercel.app/roomInfo/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: newLikeCount }),
    });
    setShowContact(true);
  };

  return (
    <div className="bg-base-100 text-base-content shadow-lg rounded-xl p-6 mt-10 space-y-4">
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
              <h4 className="font-semibold">Contact Info: {contact}</h4>
            </div>
          )}
        </div>
      </div>
      <hr className="h-0.5 border-0 bg-gray-500 mx-4" />
      <h2 className="text-2xl font-bold text-center">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h4 className="text-lg font-semibold ">Posted By</h4>
          <p className="">{displayName}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold ">Email</h4>
          <p className="">{email}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold ">Location</h4>
          <p className="">{location}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold ">Rent Amount</h4>
          <p className="">${rentAmount}/month</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold ">Room Type</h4>
          <p className="">{roomType}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold ">Lifestyle Preferences</h4>
          <p className="">{lifeStyle}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold ">Availability</h4>
          <p
            className={`font-semibold ${
              available === "yes" ? "text-green-600" : "text-red-500"
            }`}
          >
            {available === "yes" ? "Available" : "Not Available"}
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold ">Description</h4>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
