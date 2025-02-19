import dynamic from "next/dynamic";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Load component Client-side
const WalletClient = dynamic(() => import("./wallet_client"), { ssr: false });

export default function WalletStatic() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletClient />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
