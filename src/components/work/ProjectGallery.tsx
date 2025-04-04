"use client";

import { useState } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ProjectGalleryProps {
  images: string[];
  type: "desktop" | "mobile";
}

export function ProjectGallery({ images, type }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <div
        className={`
        relative overflow-hidden rounded-lg shadow-md bg-gray-100 dark:bg-gray-800
        ${
          type === "desktop" ? "aspect-video" : "aspect-[9/19] max-w-xs mx-auto"
        }
      `}
      >
        {type === "desktop" && (
          <div className="absolute inset-0 border-[16px] border-gray-800 rounded-lg z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-24 bg-gray-700 rounded-b-lg"></div>
          </div>
        )}

        {type === "mobile" && (
          <div className="absolute inset-0 border-[12px] border-gray-800 rounded-[32px] z-10">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-24 bg-gray-700 rounded-lg"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-4 w-12 bg-gray-700 rounded-full"></div>
          </div>
        )}

        <div
          className={`
          relative h-full w-full overflow-hidden
          ${type === "mobile" ? "rounded-[20px]" : ""}
        `}
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Project screenshot ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes={type === "desktop" ? "100vw" : "400px"}
            priority
          />
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-20"
            aria-label="Previous image"
          >
            <LuChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-20"
            aria-label="Next image"
          >
            <LuChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-accent w-8"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
