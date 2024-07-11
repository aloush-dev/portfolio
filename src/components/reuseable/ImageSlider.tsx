"use client";

import Image from "next/legacy/image";
import { FunctionComponent, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type imageSliderProps = {
  imageUrls: string[];
};

export const ImageSlider: FunctionComponent<imageSliderProps> = ({
  imageUrls,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  const showPreviousImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="h-full w-full relative">
      <Image  alt="slider images" src={imageUrls[imageIndex]} />
      <button
        className="absolute left-0 hover:bg-black hover:text-white h-full p-2 opacity-50 text-black"
        onClick={showPreviousImage}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        className="absolute right-0 h-full bg-black p-2 opacity-50 text-white"
        onClick={showNextImage}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
