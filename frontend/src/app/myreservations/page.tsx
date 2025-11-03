import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl mb-2">My Reservations</h1>

      <div>
        <div className="flex items-center gap-6 p-6 w-full border border-neutral-300 rounded-md">
          <div className=" w-80 h-64 rounded-md overflow-hidden relative">
            <Image
              src="/images/jungle-resort.jpg"
              alt="resort image"
              fill
              className="object-cover hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl">Property name</h2>
            <div className="flex flex-col gap-1">
              <p>
                <strong>Check In date:</strong> 14/02/2025
              </p>
              <p>
                <strong>Check Out date:</strong> 14/02/2025
              </p>
              <p>
                <strong>Number of nights:</strong> 14/02/2025
              </p>
              <p>
                <strong>Total Price:</strong> $200
              </p>
            </div>
            <button className="bg-primary text-white py-3 px-6 w-44 rounded-md cursor-pointer ">
              Go to Property
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6 p-6 w-full border border-neutral-300 rounded-md">
          <div className=" w-80 h-64 rounded-md overflow-hidden relative">
            <Image
              src="/images/jungle-resort.jpg"
              alt="resort image"
              fill
              className="object-cover hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl">Property name</h2>
            <div className="flex flex-col gap-1">
              <p>
                <strong>Check In date:</strong> 14/02/2025
              </p>
              <p>
                <strong>Check Out date:</strong> 14/02/2025
              </p>
              <p>
                <strong>Number of nights:</strong> 14/02/2025
              </p>
              <p>
                <strong>Total Price:</strong> $200
              </p>
            </div>
            <button className="bg-primary text-white py-3 px-6 w-44 rounded-md cursor-pointer ">
              Go to Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
