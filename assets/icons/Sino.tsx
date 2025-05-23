import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";
import { iconSize } from "./constants";

type SvgComponentProps = SvgProps & {
  iconSize?: "sm" | "md" | "lg";
};

const SvgComponent = ({
  fill = "#000",
  iconSize: iconSizeProp,
  ...props
}: SvgComponentProps) => {
  const size = iconSize[iconSizeProp || "sm"] || iconSize.md;
  return (
    <Svg width={size} height={size} {...props} viewBox="0 0 28 28" fill="none">
      <Path
        fill={fill}
        d="M11.667 24.5h4.666A2.34 2.34 0 0 1 14 26.833a2.34 2.34 0 0 1-2.333-2.333ZM24.5 22.167v1.166h-21v-1.166l2.333-2.334v-7c0-3.616 2.334-6.766 5.834-7.816v-.35A2.34 2.34 0 0 1 14 2.333a2.34 2.34 0 0 1 2.333 2.334v.35c3.5 1.05 5.834 4.2 5.834 7.816v7l2.333 2.334Zm-4.667-9.334C19.833 9.567 17.267 7 14 7c-3.267 0-5.833 2.567-5.833 5.833V21h11.666v-8.167Z"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
