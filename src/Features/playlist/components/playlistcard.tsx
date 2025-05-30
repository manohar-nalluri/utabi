import Image from "next/image";
import { Play } from "lucide-react";
function playlistcard() {
  return (
    <div className=" m-2 p-2 px-3 rounded text-white rounded max-w-[180px] hover:bg-[#ffffff26] ">
      <div className="relative group  rounded overflow-hidden hover:cursor-pointer">
        <Image
          src="/utabi.png"
          alt="utabi"
          className="rounded "
          height={140}
          width={140}
        />
        <div className="absolute inset-0 flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Play className="text-black w-12 h-12 p-2 justify-center items-center hover:scale-110 text-black bg-[#1ed760] rounded-full shadow-lg shadow-gray" />
        </div>
      </div>

      <h2 className="font-bold mt-2 mb-1">utabi</h2>
      <h6 className="text-slate-200 text-sm truncate ">
        ajith sign,something new hghgfgjhghbhhgcgcffgfggf
      </h6>
    </div>
  );
}

export default playlistcard;
