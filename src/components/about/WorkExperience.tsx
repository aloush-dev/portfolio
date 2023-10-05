import { workExperience } from "@/data";
import { FunctionComponent } from "react";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";

export const WorkExperience: FunctionComponent = () => {
  return (
    <section className="pb-20">
      <h2 className="text-4xl flex items-end font-bold">
        EMPLOYMENT
        <p className="text-base">TECH</p>
      </h2>
      <div className="h-1 w-full bg-accent mb-8"></div>
      <div className="lg:flex">
        <div className="lg:w-3/5">
          {workExperience.tech.map((job, index) => {
            return (
              <div className="pb-2" key={index}>
                <h3 className="font-bold text-xl">{`${job.employer.toUpperCase()} - ${job.jobTitle.toUpperCase()}`}</h3>
                <p>{job.description}</p>
                <ul>
                  {job.bulletPoints.map((point, index) => {
                    return (
                      <li key={index} className="list-disc mx-4 text-accent">
                        <p className="text-primary-text">{point}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:w-2/5 text-9xl text-accent lg:flex justify-center items-center">
          <BsPersonWorkspace />
        </div>
      </div>

      <h2 className="flex items-end text-4xl font-bold">
        EMPLOYMENT
        <p className="text-base">NON TECH</p>
      </h2>
      <div className="h-1 w-full bg-accent mb-8"></div>
      <div className="lg:flex">
        <div className="lg:w-3/5">
          {workExperience.nonTech.map((job, index) => {
            return (
              <div className="pb-4" key={index}>
                <h3 className="font-bold text-xl">{`${job.employer.toUpperCase()} - ${job.jobTitle.toUpperCase()}`}</h3>
                <p>{job.description}</p>
                <ul>
                  {job.bulletPoints.map((point, index) => {
                    return (
                      <li key={index} className="list-disc mx-4 text-accent">
                        <p className="text-primary-text">{point}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:w-2/5 text-9xl text-accent lg:flex justify-center items-center">
          <BiSolidBriefcaseAlt />
        </div>
      </div>
    </section>
  );
};
