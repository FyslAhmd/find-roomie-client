import React, { use, useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import Loadings from "../Loadings";
import AuthContext from "../../provider/AuthContext";
import RoommatePosts from "../../components/RoommatePosts";

const MainContentDashboard = () => {
  const { user } = use(AuthContext);
  const [allPost, setAllPost] = useState(null);
  const [available, setAvailable] = useState(null);
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myListings/${user.email}`)
        .then((res) => res.json())
        .then((d) => {
          setMyData(d);
        });
    }
    fetch("http://localhost:5000/roomInfo")
      .then((res) => res.json())
      .then((data) => {
        setAllPost(data);
        const availableRooms = data.filter((room) => room.available == "yes");
        setAvailable(availableRooms);
      });
  }, []);
  if (!allPost || !available || !user) return <Loadings></Loadings>;
  return (
    <div className="md:m-4 bg-base-300 p-6 rounded-xl">
      <h1 className="text-3xl font-bold mb-6">Welcome To Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <DashboardCard
          title="Browsable Rooms"
          value={allPost.length}
          color="bg-purple-800"
        />
        <DashboardCard
          title="Rooms Available"
          value={available.length}
          color="bg-orange-500"
        />
        <DashboardCard
          title="Rooms Posted by me"
          value={myData.length}
          color="bg-blue-700"
        />
        <DashboardCard title="Already Booked" value="12" color="bg-pink-600" />
      </div>

      <div className="mb-6">
        <RoommatePosts data={available}></RoommatePosts>
      </div>

      <div>
        <h1 className="text-3xl text-center font-bold mt-16 mb-6 underline decoration-white">
          FAQ
        </h1>
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <input type="radio" name="roomie-faq" defaultChecked />
            <div className="collapse-title font-semibold text-base">
              How do I post a room listing?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Go to the “Post Your Room” page from the navigation bar. Fill out
              the details including rent, location, room type, and availability,
              then click submit.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <input type="radio" name="roomie-faq" />
            <div className="collapse-title font-semibold text-base">
              How can I contact a roommate I’m interested in?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Click the “See More” button on a roommate’s listing. You’ll be
              able to view their profile and use the provided contact methods.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
            <input type="radio" name="roomie-faq" />
            <div className="collapse-title font-semibold text-base">
              Can I edit or delete my post after publishing?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Yes, go to your dashboard or profile, and you’ll find options to
              edit or remove your listings anytime.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentDashboard;
