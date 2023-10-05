import { skills } from "@/data";
import { FunctionComponent } from "react";
import { GiSkills } from "react-icons/gi";

export const Skills: FunctionComponent = () => {
  const containerStyle =
    "flex justify-content items-center bg-accent p-2 m-2 rounded-sm";
  const iconStyle = "";
  const labelStyle = "text-base text-accent-text";

  return (
    <section className="pb-20">
      <h2 className="text-4xl pb-8 font-bold text-right">
        TECH STACK
        <div className="h-1 w-full bg-accent"></div>
      </h2>

      <div className="lg:flex">
        <div className="hidden lg:w-2/5 text-9xl text-accent lg:flex justify-center items-center">
          <GiSkills />
        </div>
        <ul className="flex flex-wrap lg:justify-end lg:w-3/5">
          {skills.map((skill, index) => {
            return (
              <li className={containerStyle} key={index}>
                <h3 className={labelStyle}>{skill.name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
