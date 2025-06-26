import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const RoomCard = ({ data }) => {
  const { _id, title, location, rentAmount, displayName } = data;
  return (
    <div className="card bg-base-100 shadow-lg border border-white">
      <div className="card-body">
        <span className="badge badge-sm badge-success font-medium text-black">
          ${rentAmount} / Month
        </span>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
          <li className="flex items-center gap-3">
            <IoMdPerson size={20} />
            <span>{displayName}</span>
          </li>
          <li className="flex items-center gap-3">
            <FaLocationDot size={20} />
            <span>{location}</span>
          </li>
        </ul>
        <div className="mt-6">
          <Link to={`/details/${_id}`}>
            <button className="btn w-full rounded-xl bg-black text-white font-bold">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
