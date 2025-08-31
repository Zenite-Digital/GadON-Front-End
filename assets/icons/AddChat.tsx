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
        d="M14.015 3a10.972 10.972 0 0 0-7.767 3.222 11.007 11.007 0 0 0-3.217 7.777c-.01 2.54.869 5.004 2.482 6.963l-2.196 2.2a1.1 1.1 0 0 0-.231 1.2 1.1 1.1 0 0 0 1.043.637h9.886c2.914 0 5.708-1.159 7.768-3.222a11.007 11.007 0 0 0 0-15.555A10.977 10.977 0 0 0 14.015 3Zm0 19.8H6.777l1.021-1.024a1.1 1.1 0 0 0 0-1.55A8.804 8.804 0 0 1 11.452 5.58a8.776 8.776 0 0 1 5.914.287 8.792 8.792 0 0 1 4.39 3.979 8.811 8.811 0 0 1-2.168 10.951 8.78 8.78 0 0 1-5.573 2.002Zm3.296-9.9h-2.197v-2.2a1.1 1.1 0 0 0-1.099-1.1 1.098 1.098 0 0 0-1.098 1.1v2.2H10.72A1.098 1.098 0 0 0 9.622 14a1.1 1.1 0 0 0 1.098 1.1h2.197v2.2a1.1 1.1 0 0 0 1.098 1.1 1.098 1.098 0 0 0 1.099-1.1v-2.2h2.197a1.098 1.098 0 0 0 1.098-1.1 1.1 1.1 0 0 0-1.098-1.1Z"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
