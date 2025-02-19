import dynamic from "next/dynamic";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Load component Client-side
const AccountClient = dynamic(() => import("./AccountClient"), { ssr: false });

export default function Account() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Account</CardTitle>
      </CardHeader>
      <CardContent>
        <AccountClient />
      </CardContent>
    </Card>
  );
}
