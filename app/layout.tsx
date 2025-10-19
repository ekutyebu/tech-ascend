import "@/app/ui/globals.css";
import { sora } from "@/app/ui/fonts";
import Navbar from "@/app/ui/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased w-screen h-screen`}>
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
