import BottonNav from "@/components/Home Components/BottonNav";
import Greetings from "@/components/Home Components/Greetings";
import MiniCard from "@/components/Home Components/MiniCard";
import {BsCashCoin} from 'react-icons/bs';
import {GrInProgress} from 'react-icons/gr';



export default function Home() {
  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Section */}
      <div className="flex-[3] bg-[#262626]">
        <Greetings />
        <div className="flex items-center w-full gap-3 mt-8">
         <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
          <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} />
        </div>
      </div>
      {/* Right Section */}
      <div className="flex-[2] bg-blue-600">
        Right
      </div>
      <BottonNav /> 
    </div>
  );
}
