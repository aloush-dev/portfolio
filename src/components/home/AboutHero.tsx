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
} from "react-icons/si";

export const AboutHero: FunctionComponent = () => {
  const iconStyle = "pr-8 pt-8 text-accent";

  return (
    <section className="text-white h-hero flex justify-center items-center lg:px-60 sm:flex-col md:flex-row border-b-2 border-accent">
      <div className="flex md:flex-col">
        <h2 className="text-4xl pb-8 font-bold underline underline-offset-8 decoration-accent">
          ABOUT ME
        </h2>
        <p className="font-medium pr-8">{aboutInfo.aboutHero}</p>
        <ul className="flex flex-wrap pt-6 text-4xl">
          <li className={iconStyle}>
            <SiJavascript />
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
            <SiHtml5 />
          </li>
          <li className={iconStyle}>
            <SiCss3 />
          </li>
          <li className={iconStyle}>
            <SiTailwindcss />
          </li>
        </ul>
      </div>
      <Image
        src={aboutHero}
        width={300}
        height={300}
        alt="Photo of me for about hero"
        className="border-4 border-white"
      />
    </section>
  );
};
