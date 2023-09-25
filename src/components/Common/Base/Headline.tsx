/** @jsxImportSource @emotion/react */
import tw, { theme } from "twin.macro";

import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";

interface HeadlineProps extends TitleProps {
  upperCase?: boolean;
  textWhite?: boolean;
  textGray?: boolean;
}

export default function Headline(props: HeadlineProps) {
  const { upperCase, textWhite, textGray, ...typographyProps } = props;

  const { Title } = Typography;

  return (
    <Title
      {...typographyProps}
      style={{
        margin: "auto",
        textTransform: upperCase ? "uppercase" : undefined,
        color: textWhite
          ? "white"
          : textGray
          ? theme`colors.gray.200`
          : undefined,
      }}
    />
  );
}
