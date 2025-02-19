import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  WalletStatic  from "@/components/wallet-option";
import BuyOrderPage from "@/components/BuyOrder";


export default function NFTDApp() {
  return (
    
        <div className="container mx-auto p-4">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">NFT DApp</h1>
            <WalletStatic />
          </header>
          <Tabs defaultValue="buy" className="mb-2">
            <TabsList>
              <TabsTrigger value="buy">Buy NFT</TabsTrigger>
              <TabsTrigger value="sell">Sell NFT</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="buy">
              <BuyOrderPage nftPrice={0} /> 
            </TabsContent>
            <TabsContent value="sell">
              {/* <SellOrder /> */}
            </TabsContent>
            <TabsContent value="orders">
              {/* <OrderList /> */}
            </TabsContent>
          </Tabs>
          {/* <MarketOverview/> */}
          {/* <EquityChart /> */}
        </div>
  );
}
