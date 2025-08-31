import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";
import { iconSize } from "./constants";

type SvgComponentProps = SvgProps & {
  iconSize?: "sm" | "md" | "lg";
};

const SvgComponent = ({
  stroke = "none",
  fill = "#000",
  iconSize: iconSizeProp,
  ...props
}: SvgComponentProps) => {
  const size = iconSize[iconSizeProp || "sm"] || iconSize.md;
  return (
    <Svg width={size} height={size} {...props} viewBox="0 0 28 28">
      <Path
        d="M11.1416 21L4.49164 14.35L6.15414 12.6875L11.1416 17.675L21.8458 6.97083L23.5083 8.63333L11.1416 21Z"
        stroke={stroke}
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
