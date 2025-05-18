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
        d="m21 17.5-7-7-7 7"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
