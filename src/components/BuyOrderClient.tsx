"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { WagmiProvider, useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseAbi } from "viem";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { TOKEN_ADDRESS, FUND_CONTRACT_ADDRESS } from "@/lib/abi";

export default function BuyOrderClient({ nftPrice }: { nftPrice: number }) {
  const { isConnected } = useAccount();
  const [buyAmount, setBuyAmount] = useState("");
  const { data: hash, writeContract } = useWriteContract();

  const handleBuyOrder = async () => {
    if (!isConnected) return;
    const buyAmountWei = BigInt(buyAmount) * BigInt(10 ** 18);
    writeContract({
      address: FUND_CONTRACT_ADDRESS,
      abi: parseAbi(["function buyNFT(uint256 amount)"]),
      functionName: "buyNFT",
      args: [buyAmountWei],
    });
  };

  return (
    <div>
      {isConnected ? (
        <>
          <Input value={buyAmount} onChange={(e) => setBuyAmount(e.target.value)} placeholder="Enter USDC amount" />
          <p>Estimated NFTs: {buyAmount ? Math.floor(Number.parseFloat(buyAmount)) : 0}</p>
          <p>NFT Price: {nftPrice} USDC</p>
          <Button onClick={handleBuyOrder}>Buy NFT</Button>
          {hash && <p>Transaction: {hash}</p>}
        </>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
}
