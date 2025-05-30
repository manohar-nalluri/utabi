import { SquareLibrary, Plus, Search, AlignLeft } from "lucide-react";
import Image from "next/image";
function sideBar() {
  return (
    <div className="lg:flex basis-[25%] shrink-0 grow-0 hidden bg-[#121212] text-white  rounded-lg p-2">
      <div className="w-full text-dimmed  h-full rounded-lg p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 hover:text-white">
            <SquareLibrary />
            <span className="font-semibold text-lg">Your Library</span>
          </div>

          <div className="text-xl bg-transparent hover:bg-hover rounded-full p-1">
            <Plus />
          </div>
        </div>
        <div className="text-sm text-white rounded-full bg-hover w-fit px-3 py-1">
          Albums
        </div>
        <div className="flex justify-between items-center">
          <Search />
          <div className="flex items-center gap-1">
            <span className="text-xs">Recents</span>
            <AlignLeft />
          </div>
        </div>
        <ul className="flex flex-col">
          {/* {data.albums.map((album) => ( */}
          <div key={"album"} className="flex gap-3 hover:bg-hover p-2 rounded">
            <Image
              src={"/utabi.png"}
              width={45}
              height={45}
              alt="Album cover"
              className="rounded object-cover "
            />
            <div>
              <span className="block text-white text-[15px]">sid sriram</span>
              <span className="block text-dimmed text-xs">{`Album • sid bro`}</span>
            </div>
          </div>
          {/* ))} */}
        </ul>
      </div>
    </div>
  );
}

export default sideBar;
