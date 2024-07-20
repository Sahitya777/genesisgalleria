import { Recursive } from "next/font/google";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PromptForm from "../components/PromptForm";

const font = Recursive({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <Head>
        <title>Generate and Mint NFTs</title>
        <meta
          name="description"
          content="Mint what you desire - from cats, to rockets, to your favorite actors. Make your creativity a part of this world, forever."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={font.className}>
        <BlurElementTop />
        <BlurElementBottom />

        <Header />

        <div className="flex flex-col justify-center items-center h-[calc(100vh-40px)]">
          <h1 className="text-3xl md:text-6xl lg:text-7xl lg:mt-0 p-4 font-bold text-gray-800 text-center select-none">
            What&apos;s on your mind?
          </h1>
          <div className="flex flex-col mt-2">
            <PromptForm />
          </div>
        </div>

        <div className="max-w-[512px] mx-auto relative rounded-3xl">
          <div className="bg-transparent max-h-[512px] lg:max-h-[512px] md:max-h-[512px] w-full flex flex-col items-stretch rounded-lg border-gray-600">
            <div className="hidden lg:flex md:flex">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const BlurElementTop = () => (
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg
      className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
      viewBox="0 0 1155 678"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
        fillOpacity=".3"
        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
        <linearGradient
          id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
          x1="1155.49"
          x2="-78.208"
          y1=".177"
          y2="474.645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9089FC" />
          <stop offset={1} stopColor="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const BlurElementBottom = () => (
  <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
    <svg
      className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
      viewBox="0 0 1155 678"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
        fillOpacity=".3"
        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
        <linearGradient
          id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
          x1="1155.49"
          x2="-78.208"
          y1=".177"
          y2="474.645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9089FC" />
          <stop offset={1} stopColor="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);