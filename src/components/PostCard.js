import React, { useState } from "react";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIcon2 } from "@heroicons/react/24/solid";

const PostCard = () => {
  const [likeStatus, setLikeStatus] = useState(false);

  return (
    <>
      <div className="w-full mb-12">
        <div className="flex justify-end">
          {/* <div className="shadow-2xl rounded-3xl">
            <img
              src={require(`../assets/posts/pp.png`)}
              alt=""
              className="rounded-3xl h-96 w-[450px]"
            />

            <div className="h-24 bg-white absolute z-10">vf</div>
          </div> */}

          <div class="shadow-2xl rounded-3xl relative group">
            <img
              src={require(`../assets/posts/pp.png`)}
              alt=""
              className="rounded-3xl h-[96] w-[450px]"
            />
            <div class="shadow-2xl m-4 h-24 rounded-2xl opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex flex-col text-xl bg-[#ffffffa0] text-black font-semibold px-4">
              <div className="flex justify-between h-6">
                <h1 className="py-2">@ <span className="underline">vaibhavvemula</span> </h1>
                <img
                  src={require(`../assets/profile/temp.png`)}
                  className="h-20 w-20 rounded-full relative bottom-10 right-4"
                  alt=""
                />
              </div>
              <div className="text-start pt-4 text-lg font-normal">
                Cool Pic bla bla
              </div>
            </div>
          </div>

          <div className="flex flex-col pl-8 pt-8">
            <button
              onClick={() => {
                setLikeStatus(!likeStatus);
              }}
              className="bg-white hover:bg-[#b69aff7d] p-3 rounded-full shadow shadow-[#787878] mb-5"
            >
              {likeStatus ? (
                <HeartIcon2 className="h-8 w-8 text-red-500 whitespace-normal" />
              ) : (
                <HeartIcon className="h-8 w-8 whitespace-normal " />
              )}
            </button>
            <button className="bg-white hover:bg-[#b69aff7d] p-3 rounded-full shadow shadow-[#787878] mb-5">
              <ChatBubbleOvalLeftIcon className="h-8 w-8 whitespace-normal" />
            </button>
            <button className="bg-white hover:bg-[#b69aff7d] p-3 rounded-full shadow shadow-[#787878]">
              <PaperAirplaneIcon className="h-8 w-8 whitespace-normal" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
