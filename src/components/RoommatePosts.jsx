import React from "react";
import RoomCard from "./roomCard";

const RoommatePosts = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-10 underline decoration-white">
        Featured Roommates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <RoomCard key={item._id} data={item}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default RoommatePosts;
