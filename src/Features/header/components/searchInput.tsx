"use client";
import { FolderOpen, Search } from "lucide-react";
import { useRouter } from "next/navigation";
export default function SearchInput() {
  const router = useRouter();
  return (
    <div className="bg-foreground py-2.5 px-4 rounded-full flex justify-between text-2xl text-white">
      <div className="flex items-center gap-2">
        <Search />
        <input
          placeholder="What do you want to play?"
          className="md:inline hidden  w-96 bg-transparent outline-none placeholder:text-[14px] text-[14px] font-semibold"
        />
        <div className="h-5 w-[1px] bg-white/30" />
        <FolderOpen onClick={() => router.push("/search")} />
      </div>
    </div>
  );
}
