import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "@starknet-react/core";
import axios from "axios";
import { Lightbulb, Loader } from "lucide-react";
import { Recursive } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getAllGenesis, getGenesis } from "../blockchain/scripts/history";
import useMintNft from "../blockchain/scripts/mintnft";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { getRandomPrompt } from "../utils/index";
import { Button } from "./ui/button";

const font = Recursive({ subsets: ["latin"] });

export default function PromptForm({}: any) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ipfsHash, setIpfsHash] = useState("");
  const [isMinting, setIsMinting] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(
    ""
    // "https://shorturl.at/Dvlqm"
    // "https://oaidalleapiprodscus.blob.core.windows.net/private/org-CF0C6y3lv4lQ8ilB5bQ9SAna/user-C41QIYbDmRAXSSXjMq9xyjUJ/img-qqwIlXOGlShZxcNIYu5Xre4q.png?st=2024-06-23T08%3A24%3A35Z&se=2024-06-23T10%3A24%3A35Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-06-22T13%3A51%3A55Z&ske=2024-06-23T13%3A51%3A55Z&sks=b&skv=2023-11-03&sig=RClvaHxS8DuAmQFCGOKQL5fGsuF%2BmH0Agh3oo3eEnfQ%3D"
    // "https://oaidalleapiprodscus.blob.core.windows.net/private/org-CF0C6y3lv4lQ8ilB5bQ9SAna/user-C41QIYbDmRAXSSXjMq9xyjUJ/img-tJPa6t6Cbp4N5cADLqbYeGI3.png?st=2024-06-23T02%3A55%3A38Z&se=2024-06-23T04%3A55%3A38Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-06-22T14%3A08%3A33Z&ske=2024-06-23T14%3A08%3A33Z&sks=b&skv=2023-11-03&sig=3dxSdAs6Ow1YjDQkf2YSZfSuDYwJRHNmSTPD5esnoEM%3D"
  );
  const {
    uri,
    seturi,
    dataMint,
    errorMint,
    resetMint,
    writeAsyncMint,
    writeMint,
    isErrorMint,
    isIdleMint,
    isSuccessMint,
    statusMint,
  } = useMintNft();
  const { primaryWallet } = useDynamicContext();
  const { status } = useAccount();

  const JWT = process.env.NEXT_PUBLIC_PINATA_JWT!;

  const handleMint = async () => {
    try {
      const data = await getGenesis();
    } catch (err) {
      console.log(err, "err in trnasaction");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (status !== "connected")
      return toast.error("Please connect your wallet first");

    if (!prompt)
      return toast.error("Please enter a prompt or get surprised : )");

    setIsGenerating(true);
    setIsModalOpen(true);

    try {
      const response = await axios.post("/api/openai", { prompt });

      if (response?.status === 200) {
        setGeneratedImageUrl(response?.data?.imageData[0]?.url);
        setIsGenerating(false);
        toast.success("Image generated successfully");
      } else {
        setGeneratedImageUrl("");
        setIsGenerating(false);
        toast.error("Failed to generate image");
      }
    } catch (error) {
      toast.error("Failed to generate image");
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSupriseMe = () => {
    const randomPrompt = getRandomPrompt(prompt);
    setPrompt(randomPrompt);
  };

  const uploadByURL = async (url: string) => {
    try {
      setIsMinting(true);

      const blob = new Blob([url], {
        type: "text/plain",
      });

      const file = new File([blob], "file");

      const data = new FormData();
      data.append("file", file);

      const upload = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT}`,
            Accept: "text/plain",
            "Allow-Access-Control-Origin": "*",
          },
          body: data,
        }
      );
      const uploadRes = await upload.json();
      if (uploadRes?.IpfsHash) {
        setIpfsHash(uploadRes?.IpfsHash);
        seturi(uploadRes?.IpfsHash);
        handleMint();
      }
      setIsMinting(false);
    } catch (error) {
      console.log(error);
      setIsMinting(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllGenesis();
    };
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="animate-in fade-in duration-700">
      <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center items-center p-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          name="prompt"
          className="bg-transparent w-[250px] lg:w-[500px] md:w-[350px] relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 focus:border-none focus:ring-gray-900/20 focus:outline-none ring-gray-900/10 hover:ring-[#f1b7f1] shadow-sm"
          placeholder="Enter a prompt..."
        />

        <button
          type="submit"
          className="rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-[#f1b7f1] m-2 shadow-sm w-full sm:w-fit bg-[#e79de7] sm:bg-transparent text-white sm:text-black"
        >
          Generate
        </button>

        <Dialog
          open={isModalOpen}
          onOpenChange={(isOpen) => {
            !isGenerating && !isMinting && setIsModalOpen(isOpen);
          }}
        >
          <DialogContent hideCloseIcon className={font.className}>
            <DialogHeader>
              <DialogDescription className="flex justify-center items-center">
                {isGenerating && (
                  <>
                    <Loader className="animate-spin my-4" />
                    <span className="ml-2">Generating...</span>
                  </>
                )}

                {!isGenerating && generatedImageUrl && (
                  <>
                    <div className="flex flex-col items-center">
                      <Image
                        src={generatedImageUrl ?? "/placeholder.png"}
                        width={500}
                        height={500}
                        alt="generated image"
                      />

                      <div className="w-full flex gap-2 mt-5">
                        <Button
                          variant="ghost"
                          onClick={() => {
                            // setIsModalOpen(false)
                            handleMint();
                          }}
                          className={cn("w-full", {
                            "opacity-50 cursor-not-allowed": isMinting,
                          })}
                          disabled={isMinting}
                        >
                          Continue
                        </Button>
                        <Button
                          onClick={async () => {
                            generatedImageUrl && uploadByURL(generatedImageUrl);
                          }}
                          className={cn(
                            "w-full bg-gradient-to-tr from-[#e79de7] to-[#f28df2] text-black hover:to-[#ee77ee]",
                            {
                              "opacity-50 cursor-not-allowed": isMinting,
                            }
                          )}
                          disabled={isMinting}
                        >
                          {isMinting ? (
                            <>
                              <Loader className="animate-spin my-4 h-4 w-4" />
                              <span className="ml-2">Minting...</span>
                            </>
                          ) : (
                            "Mint NFT"
                          )}
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* <Dialog open={true}>
          <DialogContent hideCloseIcon className={font.className}>
            <DialogHeader>
              <DialogDescription className="flex justify-center items-center">
                <>
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/vercel.svg"}
                      width={500}
                      height={500}
                      alt="generated image"
                    />

                    <div className="w-full flex gap-2 mt-5">
                      <Button
                        variant="ghost"
                        onClick={() => setIsModalOpen(false)}
                        className="w-full "
                      >
                        Continue
                      </Button>
                      <Button
                        onClick={async () => {
                          uploadByURL(generatedImageUrl);
                        }}
                        className="w-full bg-gradient-to-tr from-[#e79de7] to-[#f28df2] text-black hover:to-[#ee77ee]"
                      >
                        Mint NFT
                      </Button>
                    </div>
                  </div>
                </>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog> */}
      </div>

      <div className="mb-2 mt-1 flex sm:justify-center">
        <div
          className="relative flex gap-2 overflow-hidden mt-2 rounded-full py-1.5 px-4 text-sm leading-6 border-1 border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100 bg-opacity-50 ring-1 focus:border-none focus:ring-gray-900/20 focus:outline-none ring-gray-900/10 hover:ring-[#f1b7f1] cursor-pointer mx-auto select-none"
          onClick={() => {
            handleSupriseMe();
          }}
        >
          <Lightbulb className="sm:h-5 h-3 sm:w-5 w-3" />
          <span className="absolute inset-0 hidden lg:absolute md:absolute" />
          Suprise me
        </div>
      </div>
    </form>
  );
}