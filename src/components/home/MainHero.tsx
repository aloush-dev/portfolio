import Image from "next/image";
import { FunctionComponent } from "react";
import heroImage from "../../../public/images/hero.jpeg";
import heroImage2 from "../../../public/images/hero2.jpg";

export const MainHero: FunctionComponent = () => {
  const images = [heroImage, heroImage2];

  const randomIndex = Math.floor(Math.random() * images.length);

  const randomImage = images[randomIndex];

  return (
    <section className="flex h-hero">
      <div className="">
        <Image
          className="w-full"
          src={randomImage}
          alt="Main Homepage Image"
          priority={true}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="bg-accent absolute bottom-0 right-0 p-10 min-w-[50%] md:w-[50%] m-10 font-extrabold ">
        <h2 className="text-accent-text text-4xl md:text-6xl lg:text-8xl text-center ">
          FULL STACK DEVELOPER
        </h2>
      </div>
    </section>
  );
};
