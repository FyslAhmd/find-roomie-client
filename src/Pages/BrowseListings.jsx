import React from "react";
import { Link, useLoaderData } from "react-router";

const BrowseListings = () => {
  const allData = useLoaderData();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-black text-xl">
            <th>Name</th>
            <th>Title</th>
            <th>Rent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allData.map((data) => (
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
                    Details
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
