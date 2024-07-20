import { Paintbrush } from "lucide-react";
import { Recursive } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Recursive({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <Head>
        <title>Genesis Galleria</title>
        <meta
          name="description"
          content="Mint what you desire - from cats, to rockets, to your favorite actors. Make your creativity a part of this world, forever."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={cn(font.className, "isolate bg-white h-screen")}>
        <title>Tangent</title>
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

        <main>
          <div className="relative px-6 lg:px-8">
            <div className="relative mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div className="hidden mb-2 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden mt-20 rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-[#f1b7f1]">
                    <span className="text-gray-600 ">
                      <a
                        href="https://sahii.notion.site/Genesis-Galleria-66804f0f612d4fac96269aebd8768a55"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold"
                      >
                        <span
                          className="absolute inset-0 hidden lg:absolute md:absolute"
                          aria-hidden="true"
                        />
                        Read more
                      </a>
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-row lg:justify-center md:justify-center justify-start   mt-40 lg:mt-0 md:mt-0">
                    <Paintbrush className="h-12 w-12 text-[#f1b7f1]" />

                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl bg-gradient-to-r from-[#f1b7f1] to-[#a796e5] text-transparent bg-clip-text">
                      Genesis AI
                    </h1>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    Mint what you desire - from cats, to rockets, to your
                    favorite actors. Make your creativity a part of this world,
                    forever.
                  </p>

                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <Link href="/genesis">
                      <p className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-[#f1b7f1]">
                        Enter Dapp &rarr;
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
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

                <div className="fixed inset-x-0 bottom-0">
                  <div className="bg-transparent">
                    <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                          <p className="ml-3 truncate text-gray-600"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}