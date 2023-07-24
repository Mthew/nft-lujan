import React from "react";
import Head from 'next/head'
import { Header } from "@/components/Layout";


type MainLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function MainLayout({ children, title = "LUJAN'S CLUB" }: MainLayoutProps) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <div>
      <Header />
      <section>{children}</section>
    </div>
    </>
  );
}
