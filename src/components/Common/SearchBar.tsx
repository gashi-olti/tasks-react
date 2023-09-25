/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import * as React from "react";
import { Input, Grid } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

interface SearchBarProps {
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  placeholder = "Search",
  value,
  setValue,
}: SearchBarProps) {
  const screens = useBreakpoint();

  const isTablet = screens["md"];

  const handleQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.target.value);
  };

  return (
    <div
      css={{ width: "100%", maxWidth: isTablet ? 350 : "100%", padding: 0 }}
      tw="p-0"
    >
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleQueryChange}
        prefix={<SearchOutlined tw="text-gray-300 mr-1" />}
      />
    </div>
  );
}
