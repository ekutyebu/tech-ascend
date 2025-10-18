import Image from "next/image";
import { LogoMobile } from "@/app/ui/Logo";

export default function Navbar() {
  return (
    <div className="flex p-4 justify-between items-center items">
      <div className="logo">
        <LogoMobile />
      </div>
      <nav>
        <Image
          src={require("@/public/icons/getStarted-icon.png")}
          alt=""
          width={32}
          height={32}
        />
        <Image
          src={require("@/public/icons/ham-icon.png")}
          alt=""
          width={32}
          height={32}
        />
      </nav>
    </div>
  );
}
