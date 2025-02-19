import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Load component client-side
const BuyOrderClient = dynamic(() => import("@/components/BuyOrderClient"), { ssr: false });

export default function BuyOrderPage({ nftPrice }: { nftPrice: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Place Buy Order</CardTitle>
        <CardDescription>NFT Price: {nftPrice} USDC</CardDescription>
      </CardHeader>
      <CardContent>
        <BuyOrderClient nftPrice={nftPrice} />
      </CardContent>
    </Card>
  );
}

// Lấy giá NFT trước khi build
export const getStaticProps: GetStaticProps = async () => {
  // Fake giá trị NFT (trong thực tế, cần fetch từ API hoặc smart contract server-side)
  const nftPrice = 100; // Ví dụ giá NFT là 100 USDC
  return { props: { nftPrice }, revalidate: 60 }; // Cập nhật mỗi 60 giây
};
