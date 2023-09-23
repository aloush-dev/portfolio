import { Dispatch, FunctionComponent, SetStateAction } from "react";

type FooterProps = {
  setTheme: Dispatch<SetStateAction<string>>;
};

export const Footer: FunctionComponent<FooterProps> = ({ setTheme }) => {
  const currentYear = new Date();
  return (
    <footer className="flex bg-footer text-footer-text justify-center items-center p-4 border-t-2 border-accent">
      <div className="text-center">
        ALI ADBALLAH <span className="p-2">|</span>
        {currentYear.getFullYear()}
      </div>
      <div className="ml-auto flex">
        <button
          onClick={() => {
            setTheme("");
          }}
          className="px-2 flex justify-center items-center"
        >
          <div className="relative w-5 h-5 bg-black border-2 border-white ">
            <div className="absolute inset-0 w-1/2 h-full bg-[#8A3FFC] transform origin-bottom-left"></div>
          </div>
        </button>

        <button
          onClick={() => {
            setTheme("darkBlue");
          }}
          className="px-2 flex justify-center items-center"
        >
          <div className="relative w-5 h-5 bg-black border-2 border-white">
            <div className="absolute inset-0 w-1/2 h-full bg-[#2F58CD] transform origin-bottom-left"></div>
          </div>
        </button>

        <button
          onClick={() => {
            setTheme("lightBlue");
          }}
          className="px-2 flex justify-center items-center"
        >
          <div className="relative w-5 h-5 bg-white border-2 border-white">
            <div className="absolute inset-0 w-1/2 h-full bg-[#2F58CD] transform origin-bottom-left"></div>
          </div>
        </button>
      </div>
    </footer>
  );
};
