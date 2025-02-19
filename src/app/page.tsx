import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MarketOverview } from "@/components/MarketOverview";
import { WalletOptions } from "@/components/wallet-option";
import EquityChart from "@/components/EquityChart"; // Import the EquityChart component
import { BuyOrder } from "@/components/BuyOrder";
import { SellOrder } from "@/components/SellOrder";
import { OrderList } from "@/components/OrderList";


export default function NFTDApp() {
  return (
    
        <div className="container mx-auto p-4">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">NFT DApp</h1>
            <WalletOptions />
          </header>
          <Tabs defaultValue="buy" className="mb-2">
            <TabsList>
              <TabsTrigger value="buy">Buy NFT</TabsTrigger>
              <TabsTrigger value="sell">Sell NFT</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="buy">
              <BuyOrder /> 
            </TabsContent>
            <TabsContent value="sell">
              <SellOrder />
            </TabsContent>
            <TabsContent value="orders">
              <OrderList />
            </TabsContent>
          </Tabs>
          <MarketOverview/>
          <EquityChart />
        </div>
  );
}
