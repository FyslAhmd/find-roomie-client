import React from "react";
import Slider from "../components/Slider";
import RoommatePosts from "../components/RoommatePosts";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="">
      <Slider></Slider>
      <RoommatePosts data={data}></RoommatePosts>
    </div>
  );
};

export default Home;
