"use client";
import QueueSection from "@/Features/queue/components/queuesection";
import VideoSection from "./videoSection";
import ConnectedDevicesSection from "./connectedDevicesSection";
import { useAppSelector } from "@/lib/storeHook";
import { getSelectedName } from "@/Features/bottombar/store/bottomSideSectionSlice";
import { RightDock } from "@/Features/bottombar/models/bottomBarModel";
function RightDockSection() {
  const sectionName = useAppSelector(getSelectedName);
  if (sectionName == RightDock.QUEUE) {
    return <QueueSection />;
  }
  if (sectionName == RightDock.VIDEO) {
    return <VideoSection />;
  }
  if (sectionName == RightDock.CONNECTED_DEVICES) {
    return <ConnectedDevicesSection />;
  }
  return <div></div>;
}

export default RightDockSection;
