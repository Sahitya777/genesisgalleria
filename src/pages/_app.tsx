import "@/styles/globals.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
  alchemyProvider,
  argent,
  braavos,
  infuraProvider,
  publicProvider,
  StarknetConfig,
  useInjectedConnectors,
  useProvider,
} from "@starknet-react/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { polygonZkEvmTestnet, polygon,polygonZkEvmCardona } from "wagmi/chains";

import { Toaster } from "@/components/ui/sonner";
import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";

export default function App({ Component, pageProps }: AppProps) {
  const cssOverrides = `
    .dynamic-widget-inline-controls {
      justify-content: end;
      background: transparent;
    }
`;

  const config = getDefaultConfig({
    appName: "Genesis Galleria",
    projectId: "MY_PROJECT_ID",
    chains: [polygon, sepolia,polygonZkEvmTestnet,polygonZkEvmCardona],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });

  const queryClient = new QueryClient();

  const provider = publicProvider();
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  // const config = createConfig({
  //   chains: [sepolia],
  //   transports: {
  //     [sepolia.id]: http(),
  //   },
  // });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
        <Toaster />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
