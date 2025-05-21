import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdBedroomChild, MdOutlineTextSnippet } from "react-icons/md";

const RoomCard = ({ data }) => {
  const { title, location, rentAmount, roomType, lifeStyle, displayName } =
    data;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <span className="badge badge-xs badge-success font-medium text-black">
          Available
        </span>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="text-xl">${rentAmount}/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li className="flex items-center gap-3">
            <IoMdPerson size={20} />
            <span>{displayName}</span>
          </li>
          <li className="flex items-center gap-3">
            <FaLocationDot size={20} />
            <span>{location}</span>
          </li>
          <li className="flex items-center gap-3">
            <MdBedroomChild size={20} />
            <span>{roomType}</span>
          </li>
          <li className="flex items-center gap-3">
            <MdOutlineTextSnippet size={20} />
            <span>{lifeStyle}</span>
          </li>
        </ul>
        <div className="mt-6">
          <button className="btn w-full bg-black text-white font-bold">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
