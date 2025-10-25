import Link from "next/link";
import Image from "next/image";

import SearchFilter from "./SearchFilter";

export default function Navbar() {
  return (
    <header className="fixed w-full left-0 top-0">
      <div className="flex items-center px-18 bg-white border-b border-neutral-300 h-24">
        <div className="flex items-center justify-between w-full ">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={180} height={180}/>
          </Link>
          <div>
            <SearchFilter/>
          </div>
          <div>
            user
          </div>
        </div>
      </div>
    </header>
  );
}
