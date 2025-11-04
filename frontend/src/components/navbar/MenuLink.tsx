import React from "react";

export default function MenuLink() {
  return (
    <div className="bg-white border border-neutral-300 rounded-md   w-40">
      <div className="">
        <p className="cursor-pointer px-6 pt-3 pb-1 hover:bg-neutral-300">Logout</p>
        <p className="cursor-pointer px-6 pb-3 pt-1 hover:bg-neutral-300">Sign Up</p>
      </div>
    </div>
  );
}
