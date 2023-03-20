import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import image1 from "../../../src/aseets/image1.png";
import image2 from "../../../src/aseets/image2.png";
import image3 from "../../../src/aseets/image3.png";
import image4 from "../../../src/aseets/image4.png";

const Slider = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [image1, image2, image3, image4];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    var slideAmount = slider?.offsetWidth;
    if (slider && slideAmount) {
      slider.scrollLeft = slider.scrollLeft - slideAmount;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    var slideAmount = slider?.offsetWidth;
    if (slider && slideAmount) {
      slider.scrollLeft = slider.scrollLeft + slideAmount;
    }
  };

  useEffect(() => {
    var slider = document.getElementById("slider");
    var slideAmount = slider?.offsetWidth;
    if (slider && slideAmount) {
      slider.scrollLeft = slideAmount * selectedImageIndex;
    }
  }, [selectedImageIndex]);

  return (
    <>
      <div className="relative">
        <div className="flex items-center">
          <FaChevronLeft
            onClick={slideLeft}
            className="rounded-full left-5 text-white hidden sm:flex sm:absolute cursor-pointer z-10"
            size={50}
          />
          <div
            id="slider"
            className="w-full h-full flex overflow-x-scroll scroll-smooth scrollbar-hide"
          >
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                alt={`image ${index}`}
                className="w-full"
              />
            ))}
          </div>
          <FaChevronRight
            onClick={slideRight}
            className="rounded-full right-5 text-white hidden sm:flex sm:absolute cursor-pointer z-10"
            size={50}
          />
        </div>
        <div className="flex w-full justify-center mt-4 px-6">
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt={`image ${index}`}
              className={`w-[25%] border-2 border-gray-500 mx-2 cursor-pointer `}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
