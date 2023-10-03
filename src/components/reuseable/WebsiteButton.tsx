"use client";

import Link from "next/link";
import { FunctionComponent } from "react";
import { CgWebsite } from "react-icons/cg";

type WebsiteButtonProps = {
  liveLink: string;
};

export const WebsiteButton: FunctionComponent<WebsiteButtonProps> = ({
  liveLink,
}) => {
  return (
    <Link target="_blank" href={liveLink}>
      <button className="text-accent-text bg-accent p-2 text-lg flex justify-center items-center rounded-sm">
        <CgWebsite className="pr-2 text-4xl" /> Website
      </button>
    </Link>
  );
};
