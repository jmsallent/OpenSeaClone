import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
const desiredChainId = ChainId.Mumbai;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
