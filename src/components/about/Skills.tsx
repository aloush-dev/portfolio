import { skills } from "@/data";
import { FunctionComponent } from "react";
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

export const Skills: FunctionComponent = () => {
  const containerStyle =
    "flex justify-content items-center bg-accent p-2 m-2 rounded-sm";
  const iconStyle = "";
  const labelStyle = "text-base ";

  return (
    <section className="pb-20">
      <h2 className="text-4xl pb-8 font-bold underline underline-offset-8 decoration-accent">
        TECH STACK
      </h2>

      <ul className="flex flex-wrap">
        {skills.map((skill, index) => {
          return (
            <li className={containerStyle} key={index}>
              <h3 className={labelStyle}>{skill.name}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
