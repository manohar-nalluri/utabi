import { X } from "lucide-react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import QueueCard from "@/Features/queue/components/queuecard";
function rightDock() {
  const SongSelected = true;
  const heading = "Queue";
  return (
    <div className=" basis-[20%] shrink-0 grow-0 overflow-y-scroll overflow-x-clip  min-w-0   bg-[#121212] hidden  lg:flex text-white rounded-lg   ">
      <div className={`${SongSelected ? "inline" : "hidden"}`}>
        <div className="flex px-2 justify-between sticky top-0 w-full items-center shadow-lg shadow-gray h-12 bg-black">
          <h1>{heading}</h1>
          <X className=" hover:cursor-pointer hover:rounded-full hover:bg-gray-600 h-7 w-7 p-1 hover:scale-105 " />
        </div>
        <section className="px-2">
          <h3 className="font-bold mt-4 truncate ">Now Playing</h3>
          <QueueCard />
        </section>
        <section className="px-2 ">
          <h3 className="font-bold mt-4">Next Playing:</h3>
          <QueueCard />
          <QueueCard />
          <QueueCard />
          <QueueCard />
          <QueueCard />
          <QueueCard />
          <QueueCard />
          <QueueCard />
          <QueueCard />
        </section>
      </div>
    </div>
  );
}

export default rightDock;
