import { Play } from "lucide-react";
import Image from "next/image";
import PlaylistCard from "@/Features/playlist/components/playlistcard";
import PlayListTitle from "@/Features/playlist/components/PlayListTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function content() {
  return (
    <div>
      <PlayListTitle />
      <section>
        <div className="flex justify-between px-6 ">
          <h2 className="font-bold text-2xl text-white">
            Best playlist of the week
          </h2>
          <h5 className="hover:underline hover:cursor-pointer font-bold text-[#b3b3b3]">
            Show all
          </h5>
        </div>
      </section>
      <section>
        <PlaylistCard />
        {/* <Carousel */}
        {/*   opts={{ */}
        {/*     align: "start", */}
        {/*   }} */}
        {/*   className=" p-2" */}
        {/* > */}
        {/*   <CarouselContent className="flex gap-4 overflow-x-auto no-scrollbar "> */}
        {/*     <CarouselItem className="w-auto flex-none ml-10"> */}
        {/*       <PlaylistCard /> */}
        {/*     </CarouselItem> */}
        {/*     <CarouselItem className="w-auto flex-none"> */}
        {/*       <PlaylistCard /> */}
        {/*     </CarouselItem> */}
        {/*     <CarouselItem className="w-auto flex-none"> */}
        {/*       <PlaylistCard /> */}
        {/*     </CarouselItem> */}
        {/*     <CarouselItem className="w-auto flex-none"> */}
        {/*       <PlaylistCard /> */}
        {/*     </CarouselItem> */}
        {/*     <CarouselItem className="w-auto flex-none"> */}
        {/*       <PlaylistCard /> */}
        {/*     </CarouselItem> */}
        {/*     <CarouselItem className="w-auto flex-none"> */}
        {/*       <PlaylistCard /> */}
        {/*     </CarouselItem> */}
        {/*     <CarouselItem className="w-auto flex-none mr-10"> */}
        {/*       <PlaylistCard /> */}
        {/*     </CarouselItem> */}
        {/*   </CarouselContent> */}
        {/*   <CarouselPrevious /> */}
        {/*   <CarouselNext /> */}
        {/* </Carousel> */}
      </section>
    </div>
  );
}

export default content;
