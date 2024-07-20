import {
    useAccount,
    useContractRead,
    useContractWrite,
    useWaitForTransaction,
  } from "@starknet-react/core";
  import { useEffect, useState } from "react";
  import { Abi, num, uint256 } from "starknet";
  import axios from "axios";
  
  const useMintNft = () => {
    const [uri, seturi] = useState<any>("QmdzrLZvDRqnuTRo6PsvioMk8eN7W68NMdmKuVzsRRJDuz")
    const [userAddress, setuserAddress] = useState();
    const {
      data: dataMint,
      error: errorMint,
      reset: resetMint,
      write: writeMint,
      writeAsync: writeAsyncMint,
      isError: isErrorMint,
      isIdle: isIdleMint,
      isSuccess: isSuccessMint,
      status: statusMint,
    } = useContractWrite({
      calls: [
        {
          contractAddress: '0x009912656801bb07632337c939a30a98863672bb9d9edba0836197c2ee1957b1',
          entrypoint: "publish_genesis",
          calldata: [
            uri
          ],
        },
      ]
    });
  
    return {
        uri,
        seturi,
        userAddress,
        setuserAddress,
        dataMint,
        errorMint,
        resetMint,
        writeAsyncMint,
        writeMint,
        isErrorMint,
        isIdleMint,
        isSuccessMint,
        statusMint
  };
  }
  export default useMintNft;

  