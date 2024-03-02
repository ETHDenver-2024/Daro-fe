import React from "react";
import PostCard from "../components/PostCard";

const PostsHome = () => {
  return (
    <>
      <div className="ttt overflow min-h-screen max-h-screen overflow-y-auto ">
        <div className="flex mx-auto w-[95%]">
          <div className="flex flex-col ttt overflow overflow-y-auto max-h-screen h-auto pb-48 basis-[75%]">
            <div className="flex pt-7 items-center">
              <img
                src={require("../assets/profile/temp.png")}
                alt=""
                className="h-20 w-20 rounded-full"
              />
              <div className="flex flex-col pl-6">
                <h1 className="font-mono text-2xl pb-2">Hi Vaibhav,</h1>
                <h1 className="font-semibold font-mono text-4xl">
                  Welcome Back!
                </h1>
              </div>
            </div>

            <div className="w-10/12 text-center mt-12 flex flex-col">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>

          <div className="basis-[25%] ttt overflow overflow-y-auto   pt-7 w-52">
            <h1 className="font-bold text-xl">Top Posts</h1>
            <div className="pt-6 grid grid-cols-1 gap-8 justify-items-start content-stretch">
              <div className="flex flex-col text-center">
                <img
                  src={require("../assets/TopPosts/trav.jpg")}
                  alt=""
                  className="rounded-3xl h-32 w-48"
                />
                <h1 className="pt-1 font-mono">Travel </h1>
              </div>

              <div className="flex flex-col text-center">
                <img
                  src={require("../assets/TopPosts/concert.jpg")}
                  alt=""
                  className="rounded-3xl h-32 w-48"
                />
                <h1 className="pt-1 font-mono">Concerts </h1>
              </div>
              <div className="flex flex-col text-center">
                <img
                  src={require("../assets/TopPosts/city.jpeg")}
                  alt=""
                  className="rounded-3xl h-32 w-48"
                />
                <h1 className="pt-1 font-mono">Urban </h1>
              </div>

              <div className="flex flex-col text-center">
                <img
                  src={require("../assets/TopPosts/sports.jpg")}
                  alt=""
                  className="rounded-3xl h-32 w-48"
                />
                <h1 className="pt-1 font-mono">Sports </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsHome;
