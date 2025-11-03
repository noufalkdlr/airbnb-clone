export default function ReservationSidebar() {
  return (
    <div className="border border-neutral-300 rounded-xl py-10 px-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl">$200 per Night</h1>
        <div className="border border-neutral-300 rounded-xl px-6 py-6 ">
          <p>Guest</p>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>
        <button className="bg-primary text-white py-6 rounded-xl cursor-pointer">Book</button>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <p>$200 * 4 night</p>
            <p>$800</p>
          </div>
          <div className="flex justify-between">
            <p>Fee</p>
            <p>$40</p>
          </div>

          <hr className= "border-neutral-300" />
          <div className="flex justify-between">
            <p>Total</p>
            <p>$840</p>
          </div>
        </div>
      </div>
    </div>
  );
}
