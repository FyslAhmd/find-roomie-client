import React from "react";
import { use } from "react";
import { useEffect } from "react";
import AuthContext from "../provider/AuthContext";
import { useState } from "react";
import { Link } from "react-router";

const MyListings = () => {
  const { user } = use(AuthContext);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myListings/${user.email}`)
        .then((res) => res.json())
        .then((d) => {
          setAllData(d);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/roomInfo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log("data deleted");
          const remainingData = allData.filter((item) => item._id !== id);
          setAllData(remainingData);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-black text-xl">
            <th>Title</th>
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
                    <div className="font-bold">{data.title}</div>
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
              <th className="text-center space-x-2">
                <Link to={`/updateroom/${data._id}`}>
                  <button className="btn btn-sm bg-green-700 text-white font-bold">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn btn-sm bg-red-700 text-white font-bold"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyListings;
