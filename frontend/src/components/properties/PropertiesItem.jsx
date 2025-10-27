import Image from "next/image";

export default function PropertiesItem() {
  return (
    <div>
      <div className="bg-neutral-300 relative overflow-hidden w-80 h-60 rounded-xl">
        <Image 
            src="/images/photo.jpeg"
            alt="photo"
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-300 hover:scale-110"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-xl font-medium">Propertiy name</p>
        <p>$200 per night</p>
      </div>
    </div>
  );
}
