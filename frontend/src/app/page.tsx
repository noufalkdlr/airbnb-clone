import Image from "next/image";
import Categories from "../components/Categories"
import PropertiesList from "@/components/properties/PropertiesList"

export default function Home() {
  return (
    <div>
      <div>
        <Categories/>
      </div>
      <div className="mt-10">
        <PropertiesList/>
      </div>
      
    </div>
  );
}
