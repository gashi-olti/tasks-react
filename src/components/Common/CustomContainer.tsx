/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function CustomContainer({ children }: Props) {
  return <div tw="bg-white shadow rounded-md p-2">{children}</div>;
}
