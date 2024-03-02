import React, { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const Create = () => {
  const [isNFT, setIsNFT] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleToggle = () => {
    setIsNFT(!isNFT);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleCancelImage = () => {
    setImage(null);
    document.getElementById("dropzone-file").value = "";
  };

  const handleUploadPost = () => {
    console.log("Post uploaded:", {
      isNFT,
      title,
      description,
      image,
    });
  };

  return (
    <div className="bg-gradient-to-r h-screen via-purple-300 from-indigo-400 to-purple-200 pt-0 mt-0">
      <div className=" p-8 m-1  w-1/3 mx-auto"></div>
      <div className="bg-white p-8 rounded-lg bg-transparent shadow-2xl w-1/3 mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Create a Post</h2>

        <div className="flex items-center justify-center mb-5">
          <div
            className={`relative inline-block w-10 h-6 transition-all duration-300 rounded-full cursor-pointer ${
              isNFT ? "bg-purple-500" : "bg-gray-500"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
                isNFT ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
          </div>
          <span
            className={`text-gray-500 mr-2 ml-16 ${
              isNFT ? "text-purple-500 font-bold" : " font-bold"
            }`}
          >
            {" "}
            {isNFT ? "Posting as NFT" : "Posting as Regular"}
          </span>
        </div>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-purple-900"
        />

        <textarea
          rows={4}
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-purple-900 resize-y"
        />

        {image && (
          <div className="text-black mb-4">
            <span className="font-medium">Selected File:</span> {image.name}
            <XCircleIcon
              className="w-6 h-6 hover:cursor-pointer mt-1 float-right"
              onClick={handleCancelImage}
            />
            <div className=" flex items-center justify-center pt-1">
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                width={400}
                height={400}
              />
            </div>
          </div>
        )}

        <div className="mb-2 mt-5">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center text-white w-full h-48 border-2 border-#f8f3c1 border-dashed rounded-lg cursor-pointer bg-gray-600 dark:hover:bg-bray-500 dark:bg-[#9155D8] hover:bg-gray-600 dark:#f8f3c1 dark:hover:bg-purple-500"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-whit">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-white">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                name="myImage"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <button
          className="bg-[#9155D8] text-white mt-5 text-center py-2 px-4 ml-2 rounded-md cursor-pointer hover:bg-purple-500"
          onClick={handleUploadPost}
        >
          Upload Post
        </button>
      </div>
    </div>
  );
};

export default Create;
