import React, { useState } from "react";

const Settings = () => {
  const [notificationsEnable, setNotificationsEnable] = useState(false);
  const [privateAcc, setPrivateAcc] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnable(!notificationsEnable);
  };
  const togglePrivateAcc = () => {
    setPrivateAcc(!privateAcc);
  };
  return (
    <div className="h-screen bg-gradient-to-r via-purple-300 from-indigo-400 to-indigo-200">
      <div className=" p-8 m-1 w-1/3 mx-auto">
        <h2 className="text-2xl font-bold mt-3 mb-5">Settings</h2>
        <h3 className="text-xl mt-5 font-semibold">Notifications</h3>
        <div className="flex m-6 ml-8">
          <div
            className={`relative inline-block w-10 h-6 transition-all duration-300 rounded-full cursor-pointer ${
              notificationsEnable ? "bg-purple-500" : "bg-gray-500"
            }`}
            onClick={toggleNotifications}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
                notificationsEnable ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
          </div>
          <span
            className={`text-gray-500 mr-2 ml-20 hover:cursor-pointer ${
              notificationsEnable ? "text-purple-500 font-bold" : " font-bold"
            }`}
            onClick={toggleNotifications}
          >
            {" "}
            {notificationsEnable
              ? "Notifications enabled"
              : "Notifications disabled"}
          </span>
        </div>
        <h3 className="text-xl font-semibold mt-8">Account privacy</h3>
        <div className="flex m-6 ml-8">
          <div
            className={`relative inline-block w-10 h-6 transition-all duration-300 rounded-full cursor-pointer ${
              privateAcc ? "bg-purple-500" : "bg-gray-500"
            }`}
            onClick={togglePrivateAcc}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
                privateAcc ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
          </div>
          <span
            className={`text-gray-500 mr-2 ml-20 hover:cursor-pointer ${
              privateAcc ? "font-bold" : " font-bold"
            }`}
            onClick={togglePrivateAcc}
          >
            {" "}
            {privateAcc ? "Private account" : "Private account"}
          </span>
        </div>
        <p className=" ml-4">
          Public account is viewable by everyone, even non-users; private
          account is only accessible to approved followers, with account info
          visible exclusively to them.
        </p>
      </div>
    </div>
  );
};

export default Settings;
