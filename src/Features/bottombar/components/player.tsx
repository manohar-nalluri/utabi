"use client";
import Image from "next/image";
import { useState } from "react";
import {
  MonitorSmartphone,
  MonitorPlay,
  MicVocal,
  ScrollText,
  Volume2,
  Volume1,
  Volume,
  VolumeOff,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Infinity,
} from "lucide-react";
import { RightDock } from "@/Features/bottombar/models/bottomBarModel";
import {
  changeSelectionAndToogle,
  getSelectedName,
} from "@/Features/bottombar/store/bottomSideSectionSlice";
import { useRouter, usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/storeHook";
const Player = () => {
  const router = useRouter();
  const pathname = usePathname();
  const playStatus = false;
  const [volume, setVolume] = useState(100);
  const dispatch = useAppDispatch();
  const selectedName = useAppSelector(getSelectedName);
  return (
    <div
      className="h-24 flex justify-between items-center
    text-white px-4 bg-[#121212]"
    >
      <div className="hidden lg:flex items-center gap-4">
        <Image
          className="w-12"
          width={48}
          height={48}
          src={"/utabi.png"}
          alt="song_Data"
        />
        <div>
          <p>manohar</p>
          <p className="">something</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <Shuffle className="w-4 cursor-pointer" />
          <SkipBack className="w-4 cursor-pointer" />
          {playStatus ? (
            <Play className="w-4 cursor-pointer" />
          ) : (
            <Pause className="w-4 cursor-pointer" />
          )}

          <SkipForward className="w-4 cursor-pointer" />
          <Infinity className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>00:00</p>
          <div
            // ref={seekBg}
            // onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              // ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>00:00</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <MonitorPlay
          className={`h-5 w-5 hover:cursor-pointer ${selectedName == RightDock.VIDEO ? "text-[#1ed760]" : ""}`}
          onClick={() => dispatch(changeSelectionAndToogle(RightDock.VIDEO))}
        />
        <MicVocal
          className={`h-5 w-5 hover:cursor-pointer ${pathname == "/lyrics" ? "text-[#1ed760]" : ""}`}
          onClick={() => {
            if (pathname !== "lyrics") {
              router.push("/lyrics");
              return;
            }
            router.push("/ff");
          }}
        />
        <ScrollText
          className={`h-5 w-5 hover:cursor-pointer ${selectedName == RightDock.QUEUE ? "text-[#1ed760]" : ""}`}
          onClick={() => dispatch(changeSelectionAndToogle(RightDock.QUEUE))}
        />
        {volume > 70 && (
          <Volume2
            className="h-5 w-5 hover:cursor-pointer "
            onClick={() => setVolume(0)}
          />
        )}
        {volume > 20 && volume < 70 && (
          <Volume1
            className="h-5 w-5 hover:cursor-pointer hidden"
            onClick={() => setVolume(0)}
          />
        )}
        {volume < 20 && volume != 0 && (
          <Volume
            className="h-5 w-5 hover:cursor-pointer hidden"
            onClick={() => setVolume(0)}
          />
        )}
        {volume == 0 && (
          <VolumeOff
            className="h-5 w-5 hover:cursor-pointer"
            onClick={() => {
              setVolume(100);
            }}
          />
        )}
        <MonitorSmartphone
          className={`h-5 w-5 hover:cursor-pointer ${selectedName == RightDock.CONNECTED_DEVICES ? "text-[#1ed760]" : ""}`}
          onClick={() =>
            dispatch(changeSelectionAndToogle(RightDock.CONNECTED_DEVICES))
          }
        />
      </div>
    </div>
  );
};

export default Player;
