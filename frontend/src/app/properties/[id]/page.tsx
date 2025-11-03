import ReservationSidebar from "@/components/ReservationSidebar";
import Image from "next/image";

export default function propertiesDetailPage() {
  return (
    <div>
      <div className="w-full h-[60vh] relative overflow-hidden rounded-2xl">
        <Image
          src="/images/photo.jpeg"
          alt="Photo"
          fill
          className="object-cover transition-all hover:scale-110 duration-300"
        />
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <div>
          <div>
            <h1 className="text-4xl font-medium mb-3">Property Name</h1>
            <p className="mb-10">4 guest 2 bedrooms 1 bathroom</p>
          </div>

          <hr className="border-neutral-300" />
          <div className="flex gap-6 items-center my-10">
            <div className="relative w-20 h-20 rounded-full overflow-hidden cursor-pointer ">
              <Image
                src="/images/profile_pic.jpeg"
                alt="profile pic"
                fill
                className="object-cover"
              />
            </div>
            <p>
              <strong>Jhon Doe</strong> is your host
            </p>
          </div>
          <hr className="border-neutral-300" />
          <p className="mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, vel velit odit perspiciatis maxime placeat accusamus
            laborum sunt voluptatum doloribus ipsam expedita ipsa?
            Necessitatibus, veniam quos velit aut consequatur totam.
          </p>
        </div>
        <div>
          <ReservationSidebar/>
        </div>
      </div>
    </div>
  );
}
