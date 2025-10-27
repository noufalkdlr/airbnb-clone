import React from "react";

export default function Categories() {
  return (
    <div className="flex gap-16  ">
      <div className="bg-yellow-100# cursor-pointer flex flex-col items-center gap-2 border-b border-white hover:border-black">
        <div className="bg-neutral-300 w-10 h-10 rounded-full"></div>
        <p>Beach</p>
      </div>
      <div className="bg-yellow-100# cursor-pointer flex flex-col items-center gap-2 border-b border-white hover:border-black">
        <div className="bg-neutral-300 w-10 h-10 rounded-full"></div>
        <p>villas</p>
        <div className="bg-white hover:bg-black w-full h-1"></div>
      </div>
      <div className="bg-yellow-100# cursor-pointer flex flex-col items-center gap-2 border-b border-white hover:border-black">
        <div className="bg-neutral-300 w-10 h-10 rounded-full"></div>
        <p>Cabins</p>
        <div className="bg-white hover:bg-black w-full h-1"></div>
      </div>
      <div className="bg-yellow-100# cursor-pointer flex flex-col items-center gap-2 border-b border-white hover:border-black">
        <div className="bg-neutral-300 w-10 h-10 rounded-full"></div>
        <p>Tiny homes</p>
        <div className="bg-white hover:bg-black w-full h-1"></div>
      </div>
    </div>
  );
}
