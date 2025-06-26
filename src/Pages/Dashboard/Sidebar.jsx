import React from "react";
import { Link } from "react-router";
import bgimage from "../../assets/bglogo1.png";
import { IoIosHome } from "react-icons/io";
import { FaClipboardList, FaSearch } from "react-icons/fa";
import { TbBrowserMaximize } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="md:w-64 bg-gray-800 text-white md:p-6 md:m-4 md:rounded-xl">
      <div className="flex justify-center">
        <img src={bgimage} alt="" className="w-20 md:w-30" />
      </div>
      <div className="text-2xl font-semibold mb-8">
        Find My <br className="block md:hidden" /> Roomie
      </div>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center gap-2 text-lg py-2">
            <IoIosHome />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/findRoommates"
            className="flex items-center gap-2 text-lg py-2"
          >
            <FaSearch />
            Find <br className="block md:hidden" /> Roommates
          </Link>
        </li>
        <li>
          <Link
            to="/browseListing"
            className="flex items-center gap-2 text-lg py-2"
          >
            <TbBrowserMaximize />
            Browse <br className="block md:hidden" /> Listing
          </Link>
        </li>
        <li>
          <Link
            to="/myListing"
            className="flex items-center gap-2 text-lg py-2"
          >
            <FaClipboardList />
            My Listing
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center gap-2 text-lg py-2">
            <RiTeamFill />
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex items-center gap-2 text-lg py-2">
            <MdPermContactCalendar />
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
