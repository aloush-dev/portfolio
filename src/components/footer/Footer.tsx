import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date();
  return (
    <footer className="flex bg-black text-white justify-center items-center p-4 border-t-2 border-accent">
      <div>© ALI ADBALLAH | {currentYear.getFullYear()} </div>
    </footer>
  );
};
