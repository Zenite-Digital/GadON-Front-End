import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";
import { iconSize } from "./constants";

type SvgComponentProps = SvgProps & {
  iconSize?: "sm" | "md" | "lg";
};

const SvgComponent = ({
  stroke = "#000",
  iconSize: iconSizeProp,
  ...props
}: SvgComponentProps) => {
  const size = iconSize[iconSizeProp || "sm"] || iconSize.md;
  return (
    <Svg width={size} height={size} {...props} viewBox="0 0 28 28" fill="none">
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.667}
        d="M3.5 7h21m-2.333 0v16.333c0 1.167-1.167 2.334-2.334 2.334H8.167c-1.167 0-2.334-1.167-2.334-2.334V7m3.5 0V4.667c0-1.167 1.167-2.334 2.334-2.334h4.666c1.167 0 2.334 1.167 2.334 2.334V7m-7 5.833v7m4.666-7v7"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
