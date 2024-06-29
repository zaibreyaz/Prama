import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";

const Settings = () => {
  return (
    <div>
      <div className="fixed bottom-5 right-5 z-40 flex justify-end items-center">
        <div className="text-3xl text-white bg-accent shadow-lg rounded-full flex justify-center items-center cursor-pointer w-9 h-9 lg:w-12 lg:h-12">
          <IoMdSettings />
        </div>
      </div>
    </div>
  );
};

export default Settings;
