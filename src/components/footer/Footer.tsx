import { Dispatch, FunctionComponent, SetStateAction } from "react";

type FooterProps = {
  setTheme: Dispatch<SetStateAction<string>>;
};

export const Footer: FunctionComponent<FooterProps> = ({ setTheme }) => {
  const currentYear = new Date();
  return (
    <footer className="flex bg-footer text-footer-text justify-center items-center p-4 border-t-2 border-accent">
      <div>
        ALI ADBALLAH <span className="p-2">|</span>
        {currentYear.getFullYear()}
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="relative w-10 h-10 bg-background border-2 border-white">
          <div className="absolute inset-0 w-1/2 h-full bg-accent transform origin-bottom-left"></div>
        </div>
      </div>
    </footer>
  );
};
