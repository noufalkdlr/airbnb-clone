import React from "react";

export default function SearchFilter() {
  return (
    <div className="flex items-center px-2 h-18 py-2  border rounded-full border-neutral-300" >
      <div className="px-10">
        <div className="flex gap-16">
          <div className="mr-16">
            <p>Where</p>
            <p>Wanted Location</p>
          </div>
          <div>
            <p>Check In</p>
            <p>Add dates</p>
          </div>
          <div>
            <p>Check Out</p>
            <p>Add dates</p>
          </div>
          <div>
            <p>Who</p>
            <p>Add Guests</p>
          </div>
        </div>
      </div>
      <div className="h-full ">
          <div className="bg-primary w-14 h-full rounded-full" ></div>
      </div>
      
    </div>
  );
}
