/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div tw="min-h-screen bg-gray-200 p-2">{children}</div>;
}
