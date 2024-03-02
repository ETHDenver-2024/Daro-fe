import React from "react";
import PostsHome from "./PostsHome";
import ProfileBar from "../components/ProfileBar";

const Home = () => {
  return (
    <>
      <div className="flex w-[98%] mx-auto">
        <div className="basis-[75%]">
          <PostsHome />
        </div>
        <div className="basis-[25%]">
          <ProfileBar />
        </div>
      </div>
    </>
  );
};

export default Home;
