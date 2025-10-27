import Link from "next/link";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";

import SearchFilter from "./SearchFilter";

export default function Navbar() {
  return (
    <header className="fixed w-full left-0 top-0">
      <div className="flex items-center px-18 bg-white border-b border-neutral-300 h-24">
        <div className="flex items-center justify-between w-full ">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={180} height={180} />
          </Link>
          <div>
            <SearchFilter />
          </div>

          <div className="flex justify-between w-28 gap-3 items-center border border-neutral-300 rounded-full px-2 py-2">

              <RxHamburgerMenu className="text-2xl ml-2" />

            <div className="bg-neutral-300 rounded-full h-10 w-10"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
