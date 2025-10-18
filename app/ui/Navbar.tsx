import Image from "next/image";
import { LogoMobile } from "@/app/ui/Logo";
import HamIcon from "@/public/icons/ham-icon.png";
import UserIcon from "@/public/icons/getStarted-icon.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="logo">
        <LogoMobile />
      </div>
      <nav>
        <div className="border border-p-font-c flex gap-4">
          <Image src={UserIcon} alt="" width={32} height={32} />
          <Image src={HamIcon} alt="" width={32} height={32} />
        </div>
      </nav>
    </div>
  );
}
