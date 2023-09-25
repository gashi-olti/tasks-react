type FlexDirecton = "row" | "row-reverse" | "column" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "space-evenly"
  | "space-between";
type AlignItems = "stretch" | "baseline" | "center" | "flex-start" | "flex-end";
type AlignContent =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-around"
  | "space-evenly"
  | "space-between";

interface Props {
  flexDirection?: FlexDirecton;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  children: React.ReactNode;
}

export default function Flex({
  flexDirection = "row",
  flexWrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "stretch",
  children,
  ...otherProps
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        alignContent: alignContent,
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
}
