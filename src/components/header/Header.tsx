import Link from "next/link";
import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  const linkStyle = "p-4";

  return (
    <header className="bg-black text-white flex justify-between items-center p-4 h-[77px] border-b-2 border-accent sticky top-0 z-10">
      <h1 className="font-black text-2xl">ALI ABDALLAH</h1>

      <nav className="">
        <Link className={linkStyle} href="">
          HOME
        </Link>
        <Link className={linkStyle} href="">
          ABOUT
        </Link>
        <Link className={linkStyle} href="">
          WORK
        </Link>
        <Link className={linkStyle} href="">
          CONTACT
        </Link>
      </nav>
    </header>
  );
};
