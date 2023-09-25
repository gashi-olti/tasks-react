/** @jsxImportSource @emotion/react */
import tw, { theme } from "twin.macro";
import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";

interface TextProps extends TitleProps {
  upperCase?: boolean;
  textWhite?: boolean;
  textGray?: boolean;
}

export default function Text(props: TextProps) {
  const { upperCase, textWhite, textGray, ...typographyProps } = props;

  const { Text } = Typography;

  return (
    <Text
      {...typographyProps}
      style={{
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
