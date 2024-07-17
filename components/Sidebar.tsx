"use client";

import clsx from "clsx";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import {
  ArrowBigUp,
  BookX,
  Box,
  Command,
  FileBox,
  FolderCheck,
  Layers,
  PlaySquare,
  Plus,
} from "lucide-react";

import Menu from "./ui/Menu";

export default function Sidebar() {
  const [collapse, setCollapse] = useState(true);
  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        "flex flex-col text-slate-900 dark:text-slate-200 bg-slate-200 dark:bg-slate-900 py-4",
        collapse ? "w-20" : "w-60"
      )}
    >
      <div className="px-4 border-b shadow">
        {collapse ? "" : <span className="text-2xl font-bold">GLAM</span>}.*+
      </div>
      <Accordion type="single" collapsible className="px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Menu icon={<Layers />} open={!collapse}>
              <div className="flex justify-between gap-10">
                <div className="flex-grow">Screener</div>
                <div className="flex items-center gap-1 text-slate-500">
                  <ArrowBigUp size={12} />
                  <Command size={12} />s
                </div>
              </div>
            </Menu>
          </AccordionTrigger>
          <AccordionContent>@TODO add UI</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4">
            <Menu icon={<FolderCheck />} open={!collapse}>
              <div className="flex justify-between gap-10">
                <div className="flex-grow">Portfolio</div>
                <div className="flex items-center gap-1 text-slate-500">
                  <ArrowBigUp size={12} />
                  <Command size={12} />p
                </div>
              </div>
            </Menu>
          </AccordionTrigger>
          <AccordionContent>
            <ul
              className={clsx(
                "flex flex-col gap-4 bg-slate-100 border-t border-b shadow p-4"
              )}
            >
              <Menu icon={<FileBox size={32} />} open={!collapse}>
                IBTC
              </Menu>
              <Menu icon={<Box size={32} />} open={!collapse}>
                ISOL
              </Menu>
              <Menu icon={<BookX size={32} />} open={!collapse}>
                IETH
              </Menu>
              <Menu icon={<Plus size={32} />} open={!collapse}>
                Create Product
              </Menu>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex-grow" />

      <Accordion
        type="single"
        collapsible
        onClick={toggleCollapse}
        className="px-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Menu icon={<PlaySquare />} open={!collapse}>
              current
            </Menu>
          </AccordionTrigger>
          <AccordionContent>@TODO add UI</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
