import Head from "next/head";
import RootLayout from "@/app/layout";
import Navbar from "@/app/ui/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>tech-ascend</title>
      </Head>
      <RootLayout>
        <header>
          <Navbar />
        </header>
      </RootLayout>
    </>
  );
}
