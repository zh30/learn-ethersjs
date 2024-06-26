import type { MetaFunction } from "@remix-run/cloudflare";
import { ethers } from "ethers";
import { useCallback } from "react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  // const provider = ethers.getDefaultProvider("https://ethereum-rpc.zhanghe.dev");
  const handleConnect = useCallback(async () => {
    const provider = new ethers.JsonRpcProvider("https://ethereum-rpc.zhanghe.dev/v1/sepolia");
    const balance = await provider.getBalance('zhanghe.eth');
    const txCount = await provider.getTransactionCount('zhanghe.eth');
    console.log(txCount)
    const gasFee = await provider.getFeeData();
    console.log(gasFee)
    console.log(ethers.formatEther(balance));
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-3xl">Welcome to ethers</h1>
      <Button variant="outline" onClick={handleConnect}>Hello ethers</Button>
    </div>
  );
}
