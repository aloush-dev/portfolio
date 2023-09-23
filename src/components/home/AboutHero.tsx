import { FunctionComponent } from "react";
import { aboutInfo } from "../../data/index";
import aboutHero from "../../../public/images/aboutHero.png";
import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTrpc,
  SiTypescript,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJest,
} from "react-icons/si";

export const AboutHero: FunctionComponent = () => {
  const iconStyle = "md:pr-8 md:pt-8 p-2 text-accent";

  return (
    <section className="text-white h-hero flex flex-col justify-center items-center p-8 lg:px-60 md:flex-row border-b-2 border-accent">
      <div className="flex flex-col">
        <h2 className="text-4xl pb-8 font-bold underline underline-offset-8 decoration-accent">
          ABOUT ME
        </h2>
        <p className="font-medium pr-8">{aboutInfo.aboutHero}</p>

        <ul className="flex flex-wrap pt-6 text-4xl">
          <li className={iconStyle}>
            <SiJavascript />
          </li>
          <li className={iconStyle}>
            <SiHtml5 />
          </li>
          <li className={iconStyle}>
            <SiCss3 />
          </li>
          <li className={iconStyle}>
            <SiReact />
          </li>
          <li className={iconStyle}>
            <SiNodedotjs />
          </li>
          <li className={iconStyle}>
            <SiExpress />
          </li>
          <li className={iconStyle}>
            <SiNextdotjs />
          </li>
          <li className={iconStyle}>
            <SiTrpc />
          </li>
          <li className={iconStyle}>
            <SiTypescript />
          </li>
          <li className={iconStyle}>
            <SiPostgresql />
          </li>
          <li className={iconStyle}>
            <SiTailwindcss />
          </li>
          <li className={iconStyle}>
            <SiJest />
          </li>
        </ul>
      </div>
      <div className="w-[40%] md:w-auto hidden md:block">
        <Image
          src={aboutHero}
          alt="Photo of me for about hero"
          className="border-4 border-white"
        />
      </div>
    </section>
  );
};
