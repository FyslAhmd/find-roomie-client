import React from "react";
import { use } from "react";
import { useEffect } from "react";
import AuthContext from "../provider/AuthContext";
import { useState } from "react";
import { Link } from "react-router";
import Loadings from "./Loadings";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = use(AuthContext);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "FindMyRoomie | My Listings";
    if (user?.email) {
      setLoading(true);
      fetch(
        `http://localhost:5000/myListings/${user.email}`
      )
        .then((res) => res.json())
        .then((d) => {
          setAllData(d);
          setLoading(false);
        });
    }
  }, [user?.email]);
  if (loading) {
    return <Loadings></Loadings>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/roomInfo/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingData = allData.filter((item) => item._id !== id);
              setAllData(remainingData);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto text-base-content">
      <table className="table">
        <tbody>
          <tr className="text-xl">
            <th>Title</th>
            <th>Contact</th>
            <th>Rent</th>
            <th>Total Post:{allData.length}</th>
          </tr>
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
                {data.contact}
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
