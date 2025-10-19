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
      <ul>
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
      <ul>
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
          <Image src={UserIcon} alt="User profile" width={32} height={32} />
          <button onClick={handleMenuToggle} className="focus:outline-none">
            <Image
              src={isMenuOpen ? HamIconC : HamIconO}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              width={24}
              height={24}
            />
          </button>
          {isMenuOpen && (
            <div className="absolute top-18 x right-0 min-w-[50vw] min-h-[50vh] rounded-b-md bg-bg-primary p-8 z-10 flex flex-col">
              <NavContentsLeft />
              <NavContentsRight />
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center">
        <div className="left">
          <LogoDesktop />
          <NavContentsLeft />
        </div>
        <div className="right">
          <NavContentsRight />
        </div>
      </div>
    </nav>
  );
}
