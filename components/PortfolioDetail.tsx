"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ChevronLeft, Info, Repeat, X } from "lucide-react";
import { useState } from "react";

export default function PortfolioDetail() {
  const [collapse, setCollapse] = useState(true);
  const toggleExpanded = () => {
    setCollapse((prev) => !prev);
  };

  return collapse ? (
    <div className="w-12 flex items-center justify-center bg-slate-200">
      <div onClick={toggleExpanded}>
        <Repeat />
      </div>
      <div onClick={toggleExpanded} className="absolute bottom-4">
        <ChevronLeft />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center bg-slate-200 px-4">
      <X onClick={toggleExpanded} className="absolute top-4 right-4" />
      <Tabs defaultValue="account" className="py-4 w-96">
        <TabsList className="min-w-full w-[max-content]">
          <TabsTrigger value="account">Subscribe</TabsTrigger>
          <TabsTrigger value="password">Redeem</TabsTrigger>
          <TabsTrigger value="switch">Switch</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="share">
        <TabsList className="w-full">
          <TabsTrigger value="share">Share Class Asset</TabsTrigger>
          <TabsTrigger value="kind">In-kind</TabsTrigger>
        </TabsList>
        <TabsContent value="share">
          <label
            htmlFor="amount"
            className="block font-bold leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="amount"
              id="amount"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>USDC</option>
                <option>IDR</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between text-slate-500">
            <div>Balance</div>
            <div>89,901.00</div>
          </div>

          <Separator className="my-4" />

          <div className="font-bold mt-5 mb-2">Terms</div>
          <div className="flex justify-between my-2">
            <div className="text-slate-500">Lock-up Period</div>
            <div>24 hours</div>
          </div>
          <div className="flex justify-between my-2">
            <div className="text-slate-500">Minimum Investment</div>
            <div>USDC 1,000</div>
          </div>
          <div className="flex justify-between my-2">
            <div className="text-slate-500">Maximum Investment</div>
            <div>USDC 10,000</div>
          </div>

          <Separator className="my-4" />

          <div className="font-bold mt-5 mb-2">Summary</div>
          <div className="flex justify-between my-2">
            <div className="text-slate-500">Latest NAV</div>
            <div>100.00</div>
          </div>
          <div className="flex justify-between my-2">
            <div className="text-slate-500">Subscription Fees</div>
            <div>(0%) 0</div>
          </div>
          <div className="flex justify-between my-2">
            <div className="text-slate-500 flex items-center gap-2">
              Approx. Subscription Amount
              <Info size={16} />
            </div>
            <div>GBS 123.45</div>
          </div>

          <Separator className="my-4" />

          <div className="flex gap-4">
            <Button variant="secondary">Clear</Button>
            <Button className="flex-grow bg-green-700">
              Subscribe 1,000 USDC
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="kind">@TODO content in kind</TabsContent>
      </Tabs>
    </div>
  );
}
