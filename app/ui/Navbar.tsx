"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoDesktop, LogoMobile } from "@/app/ui/Logo";
import HamIconO from "@/public/icons/ham-icon.png";
import HamIconC from "@/public/icons/ham-icon-c.png";
import UserIcon from "@/public/icons/getStarted-icon.png";

export const NavContentsLeft = () => {
  return (
    <div>
      <ul className="md:flex items-center gap-[3rem]">
        <li>
          <Link href={""}>About Us</Link>
        </li>
        <li>
          <Link href={""}>Blog</Link>
        </li>
        <li>
          <Link href={""}>Programs</Link>
        </li>
      </ul>
    </div>
  );
};

export const NavContentsRight = () => {
  return (
    <div>
      <ul className=" md:flex items-center gap-[3rem]">
        <li>
          <Link href={""}>Login</Link>
        </li>
        <li>
          <Link href={""}>Get Started</Link>
        </li>
      </ul>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-[95%] md:w-[90%] mx-auto">
      <div className="desktop"></div>
      <div className="mobile flex justify-between items-center w-full">
        <div className="block md:hidden">
          <LogoMobile />
        </div>
        <div className="flex gap-[1rem] md:hidden relative">
          <Image
            src={UserIcon}
            alt="User profile"
            width={20}
            height={20}
            className="w-auto h-auto"
          />
          <button onClick={handleMenuToggle} className="focus:outline-none">
            <Image
              src={isMenuOpen ? HamIconC : HamIconO}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              width={24}
              height={24}
              className="w-auto h-auto"
            />
          </button>
          {isMenuOpen && (
            <div className="absolute top-18 x right-0 min-w-[50vw] min-h-[50vh] rounded-b-md bg-button-grey p-8 z-10 flex flex-col">
              <NavContentsLeft />
              <NavContentsRight />
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center">
        <div className="left flex items-center gap-[3rem] border p-4 rounded-full">
          <LogoDesktop />
          <NavContentsLeft />
        </div>
        <div className="right border p-4 rounded-full">
          <NavContentsRight />
        </div>
      </div>
    </nav>
  );
}
