import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";
import { iconSize } from "./constants";

type SvgComponentProps = SvgProps & {
  iconSize?: "sm" | "md" | "lg";
};

const SvgComponent = ({
  stroke = "#000",
  fill = "none",
  iconSize: iconSizeProp,
  ...props
}: SvgComponentProps) => {
  const size = iconSize[iconSizeProp || "sm"] || iconSize.md;
  return (
    <Svg width={size} height={size} {...props} viewBox="0 0 28 28">
      <Path
        d="M14 3.5C11.9233 3.5 9.89323 4.11581 8.16652 5.26957C6.4398 6.42332 5.09399 8.0632 4.29927 9.98182C3.50455 11.9004 3.29661 14.0116 3.70176 16.0484C4.1069 18.0852 5.10693 19.9562 6.57538 21.4246C8.04383 22.8931 9.91476 23.8931 11.9516 24.2982C13.9884 24.7034 16.0996 24.4955 18.0182 23.7007C19.9368 22.906 21.5767 21.5602 22.7304 19.8335C23.8842 18.1068 24.5 16.0767 24.5 14"
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
