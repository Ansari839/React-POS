import BottonNav from "@/components/BottonNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Section */}
      <div className="flex-[3] bg-red-600">
        Left
      </div>
      {/* Right Section */}
      <div className="flex-[2] bg-blue-600">
        Right
      </div>
      <BottonNav />
    </div>
  );
}
