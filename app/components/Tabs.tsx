"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Tab = {
  id: number;
  title: string;
  href: string;
};

interface TabsProps {
  tabs: Tab[];
}

function Tabs({ tabs }: TabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-1/2 py-2 px-4 ${
              pathname === tab.href
                ? "border-b-2 border-gray-500 text-black"
                : "text-gray-500"
            } focus:outline-none`}
            onClick={() => router.push(tab.href)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
