import React from "react";
import { Header } from "@/components/Layout";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="md:container md:mx-auto">
      <Header />
      <section>{children}</section>
    </div>
  );
}
