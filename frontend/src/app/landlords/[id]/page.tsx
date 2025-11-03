import ContactButton from "@/components/ContactButton";
import PropertiesList from "@/components/properties/PropertiesList";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex gap-10 mt-36">
      <div className="w-1/4 border border-neutral-300 rounded-xl">
      <div className="flex flex-col items-center py-16 gap-6">
        <div className="relative w-48 h-48 rounded-full overflow-hidden ">
          <Image src="/images/profile_pic.jpeg" alt="profile pic" fill className="object-cover" />
        </div>
        <h3 className="font-medium text-2xl">Landlord name</h3>
          <ContactButton/>
      </div>
      </div>
      <div className="flex-1 ">
        <PropertiesList/>
      </div>
    </div>
  );
}
