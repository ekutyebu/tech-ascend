import "@/app/ui/globals.css";
import { sora } from "@/app/ui/fonts";
import { Metadata } from "next";
import Navbar from "@/app/ui/Navbar";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Acme Dashboard",
//     default: "Acme Dashboard",
//   },
//   description: "The official Next.js Learn Dashboard built with App Router.",
//   metadataBase: new URL("https://next-learn-wallet.vercel.sh"),
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased w-full`}>{children}</body>
    </html>
  );
}
