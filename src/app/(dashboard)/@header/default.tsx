import React from "react";
import Logo from "./logo";
import { House, ArrowDown, Bell } from "lucide-react";
import SearchInput from "@/Features/header/components/searchInput";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between text-dimmed text-white">
      <Image src="/utabi.png" alt="utabi" width={60} height={60} />

      <div className="flex items-center gap-2">
        <div className="text-2xl p-2.5 rounded-full hover:scale-105">
          <House />
        </div>
        <SearchInput />
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden md:inline px-3 py-1.5 bg-white text-black text-sm font-bold rounded-full">
          Explore Premium
        </button>
        <div className="flex items-center gap-1.5 text-white">
          <div className="rounded-full text-lg font-bold border-2">
            <ArrowDown className="w-4 h-4" />
          </div>
          <span className="font-semibold text-xs">Install App</span>
        </div>

        <Bell className="text-xl w-4 h-4" />
        <Image
          alt="User Pic"
          width={40}
          height={40}
          className="rounded-full object-cover aspect-square"
          src="/utabi.png"
        />
      </div>
    </div>
  );
}
