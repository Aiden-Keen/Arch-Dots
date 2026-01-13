"use client";
import React from "react";
import NavBar from "./_components/NavBar";
import SplashProvider from "../_splash/SplashProvider";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <SplashProvider>
      <div className="bg-background min-h-screen flex">
        <NavBar />
        <div className="flex-1 overflow-y-auto">{props.children}</div>
      </div>
    </SplashProvider>
  );
};

export default Layout;
