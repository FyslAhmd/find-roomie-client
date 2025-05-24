import React from "react";
import Slider from "../components/Slider";
import RoommatePosts from "../components/RoommatePosts";
import { useLoaderData } from "react-router";
import Steps from "../components/Steps";
import SuccessStory from "../components/SuccessStory";
import { useEffect } from "react";

const Home = () => {
  const data = useLoaderData();
  useEffect(() => {
      document.title = "FindMyRoomie | Home";
    }, []);
  return (
    <div className="">
      <Slider></Slider>
      <RoommatePosts data={data}></RoommatePosts>
      <Steps></Steps>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default Home;
