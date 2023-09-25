import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface Props {
  children: React.ReactNode;
}

export default function ScrollBar({ children, ...otherProps }: Props) {
  return <SimpleBar {...otherProps}>{children}</SimpleBar>;
}
