"use client";
import { useRouter, usePathname } from "next/navigation";
import {
  MonitorSmartphone,
  MonitorPlay,
  MicVocal,
  ScrollText,
  Volume2,
  Volume1,
  Volume,
  VolumeOff,
} from "lucide-react";
import Player from "@/Features/bottombar/components/player";
import { useState } from "react";
function controllers() {
  const [selected, setSelected] = useState("");
  const [volume, setVolume] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  return <Player />;
}

export default controllers;
