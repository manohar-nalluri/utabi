"use client";
import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/storeHook";
import { RightDock } from "@/Features/bottombar/models/bottomBarModel";
import {
  toggleShowSideSection,
  getSelectedName,
} from "@/Features/bottombar/store/bottomSideSectionSlice";
function RightDockWrapper({ children }: { children: React.ReactNode }) {
  const selectedName = useAppSelector(getSelectedName);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${selectedName !== RightDock.NONE ? "lg:flex" : "hidden"} basis-[20%] shrink-0 grow-0 overflow-y-scroll   min-w-0   bg-[#121212] hidden  text-white rounded-lg   `}
    >
      <div
        className={`${selectedName !== RightDock.NONE ? "inline" : "hidden"}`}
      >
        <div className="flex px-2 justify-between sticky top-0 w-full items-center shadow-lg shadow-gray h-12 bg-black">
          <h1 className="text-white">{selectedName}</h1>
          <X
            onClick={() => {
              dispatch(toggleShowSideSection());
            }}
            className=" hover:cursor-pointer hover:rounded-full hover:bg-gray-600 h-7 w-7 p-1 hover:scale-105 "
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default RightDockWrapper;
