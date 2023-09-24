import { workExperience } from "@/data";
import { FunctionComponent } from "react";

export const WorkExperience: FunctionComponent = () => {
  return (
    <section className="pb-20">
      <h2 className="flex items-end text-4xl pb-8 font-bold underline underline-offset-8 decoration-accent decoration-4">
        EMPLOYMENT
        <p className="text-base underline decoration-accent decoration-4 ">
          TECH
        </p>
      </h2>
      {workExperience.tech.map((job, index) => {
        return (
          <div className="pb-2" key={index}>
            <h3 className="">{`${job.employer.toUpperCase()} - ${job.jobTitle.toUpperCase()}`}</h3>
            <p>{job.description}</p>
          </div>
        );
      })}

      <h2 className="flex items-end text-4xl pb-8 font-bold underline underline-offset-8 decoration-accent decoration-4">
        EMPLOYMENT
        <p className="text-base underline decoration-accent decoration-4 ">
          NON TECH
        </p>
      </h2>
      {workExperience.nonTech.map((job, index) => {
        return (
          <div className="pb-2" key={index}>
            <h3 className="">{`${job.employer.toUpperCase()} - ${job.jobTitle.toUpperCase()}`}</h3>
            <p>{job.description}</p>
          </div>
        );
      })}
    </section>
  );
};
