import React from "react";
import Contact from "../../components/Form/Contact";
import Slider from "../../components/Slider";

const Main = () => {
  return (
    <div className="w-full h-screen">
      <div className="container h-[full]">
        <div className="flex">
          <h1>Title</h1>
          <h4>slogan</h4>
        </div>
        <div className="w-[80%] h-full mx-auto mt-24 flex gap-2">
          <div className="w-[850px]">
            <Slider />
          </div>
          <div className="w-[300px] bg-[#3B4154]">
            <Contact />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
