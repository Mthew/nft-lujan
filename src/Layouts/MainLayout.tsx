import React from "react";
import { Header } from "@/components/Layout";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="container mx-auto px-4 sm:px-1 md:px-2 ">
      <Header />
      <section>{children}</section>
    </div>
  );
}
