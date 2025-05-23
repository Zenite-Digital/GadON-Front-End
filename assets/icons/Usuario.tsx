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
        strokeWidth={2}
        d="M14 11.667a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334ZM23.333 20.417c0 2.899 0 5.25-9.333 5.25s-9.333-2.351-9.333-5.25c0-2.9 4.179-5.25 9.333-5.25s9.333 2.35 9.333 5.25Z"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
