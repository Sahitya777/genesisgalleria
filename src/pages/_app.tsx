import "@/styles/globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { sepolia } from "@starknet-react/chains";
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

export default function App({ Component, pageProps }: AppProps) {
  const cssOverrides = `
    .dynamic-widget-inline-controls {
      justify-content: end;
      background: transparent;
    }
`;

  const provider = publicProvider();
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_ENVIRONMENT_ID!,
        walletConnectors: [StarknetWalletConnectors],
        cssOverrides: cssOverrides,
        enableConnectOnlyFallback: true,
      }}
    >
      <StarknetConfig
        chains={[sepolia]}
        provider={provider}
        connectors={connectors}
      >
        <Component {...pageProps} />
        <Toaster />
      </StarknetConfig>
    </DynamicContextProvider>
  );
}