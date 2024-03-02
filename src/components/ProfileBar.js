import React from "react";
import { ProfileCard } from "./ProfileCard";

const ProfileBar = () => {
  return (
    <>
      <div className="ttt overflow overflow-y-auto  pt-7 bg-slate-200  text-white text-6xl text-center min-h-screen max-h-screen font-mono">
      <ProfileCard />
      </div>
    </>
  );
};

export default ProfileBar;
