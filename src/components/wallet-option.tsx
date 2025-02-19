'use client'
import * as React from "react";
import { Connector, useAccount, useConnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Account } from "./Account";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  else
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Connect your wallet</Button>
            </PopoverTrigger>
            <PopoverContent>
              <Label>Choose connection type: </Label>
              {connectors.map((connector) => (
                <div className="mt-2" key={connector.uid}>
                  <WalletOption
                    connector={connector}
                    onClick={() => connect({ connector })}
                  />
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </QueryClientProvider>
      </WagmiProvider>
    );
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <Button className="w-full" disabled={!ready} onClick={onClick}>
      {connector.name}
    </Button>
  );
}
