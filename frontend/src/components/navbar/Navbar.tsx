"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";

import SearchFilter from "./SearchFilter";
import MenuLink from "./MenuLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full left-0 top-0 z-10">
      <div className="flex items-center px-18 bg-white border-b border-neutral-300 h-24">
        <div className="flex items-center justify-between w-full ">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={180} height={180} />
          </Link>
          <div>
            <SearchFilter />
          </div>

          <div className="relative">
            <div className="flex justify-between w-28 gap-3 items-center border border-neutral-300 rounded-full px-2 py-2">
              <RxHamburgerMenu onClick={()=> setIsOpen(!isOpen)} className="text-2xl ml-2 cursor-pointer" />

              <div className="bg-neutral-300 rounded-full h-10 w-10"></div>
            </div>
            {isOpen && (
              <div className="absolute top-0 right-0 mt-16">
                <MenuLink />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
