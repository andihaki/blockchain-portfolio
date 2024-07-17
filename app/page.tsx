import Image from "next/image";
import { Box, ChevronDown, ChevronUp } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import imgChartJs from "./assets/chartjs.png";

export default function Home() {
  return (
    <main className="m-20">
      <Breadcrumb className="font-bold">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Screener</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">GSB</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-20 mb-12 grid grid-cols-10 gap-4 w-full">
        <Box className="size-full max-h-28" />
        <div className="bg-slate-200 p-4 col-span-5">
          <div className="font-bold text-3xl mb-2">GLUM Investment Fund</div>
          <div>
            The GLUM Investment Fund seeks to reflect generally the performance
            of Sharia Stocks
          </div>
        </div>
        <div className="flex text-slate-500 flex-col justify-center gap-5 bg-slate-200 p-4 col-span-2 row-span-2">
          NAV
          <div className="text-4xl text-black">100.00</div>
          <div>1 Day NAV Change</div>
          <div className="flex gap-3 text-green-800">
            <ChevronUp />
            1.00 (1.00%)
          </div>
        </div>
        <div className="flex text-slate-500 flex-col justify-center gap-5 bg-slate-200 p-4 col-span-2 row-span-2">
          AUM
          <div className="text-4xl text-black">21.0M</div>
          <div>1 Day AUM Change</div>
          <div className="flex gap-3 text-red-800">
            <ChevronDown />
            1M (0.42%)
          </div>
        </div>
        <div className="flex text-slate-500 flex-col gap-5 bg-slate-200 p-4">
          Symbol
          <div className="text-4xl text-black">GBS</div>
          Cpr...iN1
        </div>
        <div className="flex text-slate-500 flex-col gap-5 bg-slate-200 p-4 col-span-2">
          Share Class Asset
          <div className="text-4xl text-black">USDC</div>
          Epj...t1v
        </div>
        <div className="flex text-slate-500 flex-col gap-5 bg-slate-200 p-4 col-span-3">
          Fees
          <div className=" text-slate-500">
            <div className="flex gap-6 justify-between">
              <div className="flex justify-between gap-8">
                Management
                <div className="text-black">1.5%</div>
              </div>
              <div className="flex justify-between gap-8">
                Subscription
                <div className="text-black">0%</div>
              </div>
            </div>
            <div className="flex gap-6 justify-between">
              <div className="flex justify-between gap-8">
                Performance
                <div className="text-black">10%</div>
              </div>
              <div className="flex justify-between gap-8">
                Redemption
                <div className="text-black">0%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Tabs defaultValue="overview" className="py-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9 bg-slate-200 p-4">
            <div className="font-bold text-lg">Performance</div>
            <Image src={imgChartJs} alt="" className="w-full" />
          </div>
          <div className="col-span-3 bg-slate-200 p-4">
            <div className="font-bold mt-5 mb-2 text-lg">Key Facts</div>
            <div className="flex justify-between my-2">
              <div className="text-slate-500">Share Class Asset</div>
              <div>USDC</div>
            </div>
            <div className="flex justify-between my-2">
              <div className="text-slate-500">Inception Date</div>
              <div>2024-04-01</div>
            </div>

            <Separator className="my-4" />

            <div className="font-bold mt-5 mb-2">Accounts</div>
            <div className="flex justify-between my-2">
              <div className="text-slate-500">Fund</div>
              <div>adsfasdf....123123</div>
            </div>
            <div className="flex justify-between my-2">
              <div className="text-slate-500">Manager</div>
              <div>jjjpkpkopp....--o0-9-0</div>
            </div>
            <div className="flex justify-between my-2">
              <div className="text-slate-500">Treasury</div>
              <div>90oioj90ij...ikjiojoi</div>
            </div>

            <Separator className="my-4" />
            <div className="font-bold mt-5 mb-2">Terms</div>
            <div className="flex justify-between my-2">
              <div className="text-slate-500">Lock-up Period</div>
              <div>24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
