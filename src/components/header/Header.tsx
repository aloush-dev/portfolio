"use client";

import Link from "next/link";
import { FunctionComponent } from "react";
import BurgerMenu from "./BurgerMenu";
import { usePathname } from "next/navigation";

export const Header: FunctionComponent = () => {
  const currentPage = usePathname();

  return (
    <header className="bg-header text-header-text flex justify-between items-center p-4 h-[77px] border-b-2 border-accent sticky top-0 z-10">
      <Link href="/">
        <h1 className="font-black text-2xl">
          ALOUSH<span className="text-accent text-4xl">.</span>DEV
        </h1>
      </Link>

      <nav className="hidden md:block">
        <Link
          className={`${
            currentPage === "/"
              ? "underline underline-offset-8 decoration-accent decoration-4 p-4"
              : "p-4"
          }`}
          href={`/`}
        >
          Home
        </Link>

        <Link
          className={`${
            currentPage === "/about"
              ? "underline underline-offset-8 decoration-accent decoration-4  p-4"
              : "p-4"
          }`}
          href={`/about`}
        >
          About
        </Link>

        <Link
          className={`${
            currentPage === "/work"
              ? "underline underline-offset-8 decoration-accent decoration-4  p-4"
              : "p-4"
          }`}
          href={`/work`}
        >
          Work
        </Link>

        <Link
          className={`${
            currentPage === "/contact"
              ? "underline underline-offset-8 decoration-accent decoration-4  p-4"
              : "p-4"
          }`}
          href={`/contact`}
        >
          Contact
        </Link>
      </nav>

      <nav className="md:hidden">
        <BurgerMenu currentPage={currentPage} />
      </nav>
    </header>
  );
};
