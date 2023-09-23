import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date();
  return (
    <footer className="flex bg-footer text-footer-text justify-center items-center p-4 border-t-2 border-accent">
      <div>
        ALI ADBALLAH <span className="p-2">|</span>
        {currentYear.getFullYear()}
      </div>
    </footer>
  );
};
