import Image from "next/image";
import LogoM from "@/public/logo/techAscend-logo-mobile.png";

export function LogoMobile() {
  return <Image src={LogoM} alt="Tech Ascend Logo" width={150} height={50} />;
}

export function LogoDesktop() {
  return <Image src={LogoM} alt="Tech Ascend Logo" width={150} height={50} />;
}
