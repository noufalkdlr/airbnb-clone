"use client"

import CustomButton from "@/components/CustomButton";

export default function ConversationPage() {
  return (
    <div className=" w-1/2 mx-auto h-[900px] flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 bg-neutral-200 w-[80%] rounded-md p-6">
          <h2 className="text-xl font-bold text-neutral-600">John Doe</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            distinctio.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-blue-200 w-[80%] rounded-md p-6 ml-[20%]">
          <h2 className="text-xl font-bold text-neutral-600">Noufal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            distinctio.
          </p>
        </div>
      </div>
      <div className="border border-neutral-300 p-6 rounded-md flex items-center gap-4">
        <input type="text" placeholder="Type your message" name="" id="" className="border border-neutral-300 p-3 flex-1 rounded-md" />
        <CustomButton label="Send" onClick={()=> console.log("Clicked")}/>
      </div>
    </div>
  );
}
