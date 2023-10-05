import { education } from "@/data";
import { FunctionComponent } from "react";
import { IoSchool } from "react-icons/io5";

export const Education: FunctionComponent = () => {
  return (
    <section>
      <h2 className="text-4xl pb-8 font-bold text-right">
        EDUCATION
        <div className="h-1 w-full bg-accent"></div>
      </h2>

      <div className="lg:flex">
        <div className="hidden lg:w-2/5 text-9xl text-accent lg:flex justify-center items-center">
          <IoSchool />
        </div>
        <div className="lg:w-3/5 text-right">
          {education.map((obj) => {
            return (
              <h3 className="font-bold text-xl">{`${obj.school} - ${obj.course}`}</h3>
            );
          })}
        </div>
      </div>
    </section>
  );
};
