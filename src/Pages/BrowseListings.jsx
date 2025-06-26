import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";

const BrowseListings = () => {
  const allData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    document.title = "FindMyRoomie | Browse Roomie";
  }, []);

  useEffect(() => {
    const filtered = allData.filter((item) =>
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, allData]);
  return (
    <div className="overflow-x-auto text-base-context">
      <div className="my-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by location (e.g., Dhaka)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full pl-10 pr-4 py-2 bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </div>
        </div>
      </div>

      <table className="table">
        <tbody>
          <tr className="text-xl">
            <th>Name</th>
            <th>Title</th>
            <th>Rent</th>
            <th>Total Post:{allData.length}</th>
          </tr>
          {filteredData.map((data) => (
            <tr key={data._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{data.displayName}</div>
                    <div className="text-sm opacity-50">{data.location}</div>
                  </div>
                </div>
              </td>
              <td>
                {data.title}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Available: {data.available}
                </span>
              </td>
              <td>
                <div>${data.rentAmount}/month</div>
                <div>Room Type: {data.roomType}</div>
              </td>
              <th>
                <Link to={`/details/${data._id}`}>
                  <button className="btn btn-sm bg-black text-white font-bold">
                    See More
                  </button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseListings;
