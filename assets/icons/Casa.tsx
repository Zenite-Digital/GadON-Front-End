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
        strokeWidth={2}
        d="M17.5 24.5v-9.333A1.167 1.167 0 0 0 16.333 14h-4.666a1.167 1.167 0 0 0-1.167 1.167V24.5"
      />
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.5 11.667a2.334 2.334 0 0 1 .827-1.783l8.167-6.999a2.334 2.334 0 0 1 3.012 0l8.167 6.999a2.332 2.332 0 0 1 .827 1.783v10.5a2.333 2.333 0 0 1-2.333 2.333H5.833A2.333 2.333 0 0 1 3.5 22.167v-10.5Z"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
