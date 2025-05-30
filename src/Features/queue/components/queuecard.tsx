import Image from "next/image";
import { Play } from "lucide-react";

function QueueCard() {
  return (
    <div className="flex items-center gap-2 mt-2 min-w-0 w-full ">
      <div className="relative group w-[60px] h-[60px] rounded overflow-hidden shrink-0 hover:cursor-pointer">
        <Image
          src="/utabi.png"
          alt="utabi"
          width={60}
          height={60}
          className="object-cover "
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Play className="text-white w-6 h-6" />
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 ">
        <h4 className="text-sm truncate whitespace-nowrap overflow-hidden">
          utabi
        </h4>
        <h6 className="text-xs text-gray-400 truncate whitespace-nowrap overflow-hidden">
          ajith sign, something new hghgfgjhghbhhgcgcffgfggf
        </h6>
      </div>

      <div className="shrink-0 text-white text-xl">⋮</div>
    </div>
  );
}

export default QueueCard;
