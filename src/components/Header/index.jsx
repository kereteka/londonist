import React from "react";
import logo from "../../aseets/logo.svg";

const Header = () => {
  return (
    <>
      <div className="absolute w-[100vw] top-0 h-[100px] bg-purple-primary flex items-center">
        <div className="container mx-auto">
          <img
            className=" brightness-0 invert w-[190px] h-[63px]"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
