import Head from "next/head";
import RootLayout from "@/app/layout";
import Navbar from "@/app/ui/Navbar";

export default function Home() {
  return (
    <>
      <RootLayout>
        <div className="max-w-3xl mx-auto p-4">
          <Head>
            <title>tech-ascend</title>
          </Head>
          <header className="mx-auto w-[95%]">
            <Navbar />
          </header>
        </div>
      </RootLayout>
    </>
  );
}
