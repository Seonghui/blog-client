import Tabs from "@/app/components/Tabs";
import React from "react";

const tabsData = [
  { id: 0, title: "Log In", href: "/login" },
  { id: 1, title: "Sign Up", href: "/create-account" },
];

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid place-items-center h-screen max-w-xs mx-auto">
      <div className="w-full">
        <div className="pb-8 w-56 mx-auto">
          <Tabs tabs={tabsData} />
        </div>
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
}
