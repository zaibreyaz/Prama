import React from "react";
import prama from "./assets/Prama.png";
const Logo = () => {
  return (
    <div className="relative">
      <div className="absolute top-2 left-2">
        <img src={prama} alt="prama" className="w-20 h-20" />
      </div>
    </div>
  );
};

export default Logo;
