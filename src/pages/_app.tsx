import "@/styles/globals.css";

import {
  StarknetConfig,
  alchemyProvider,
  argent,
  braavos,
  infuraProvider,
  publicProvider,
  useInjectedConnectors,
  useProvider,
} from "@starknet-react/core";
import type { AppProps } from "next/app";

import { Toaster } from "@/components/ui/sonner";
import { createConfig,http, WagmiProvider } from "wagmi";
import { mainnet,sepolia } from "wagmi/chains";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  const cssOverrides = `
    .dynamic-widget-inline-controls {
      justify-content: end;
      background: transparent;
    }
`;

const queryClient = new QueryClient();

  const provider = publicProvider();
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  const config = createConfig({
    chains: [sepolia],
    transports: {
      [sepolia.id]: http(),
    },
  })


  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster />
      </QueryClientProvider>
    </WagmiProvider>
  );
}