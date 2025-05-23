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
        d="M12.688 14a1.313 1.313 0 1 0 2.625 0 1.313 1.313 0 0 0-2.626 0Zm5.468 0a1.313 1.313 0 1 0 2.626 0 1.313 1.313 0 0 0-2.626 0ZM7.22 14a1.313 1.313 0 1 0 2.625 0 1.313 1.313 0 0 0-2.625 0Zm18.08-4.747a12.254 12.254 0 0 0-2.634-3.918 12.151 12.151 0 0 0-3.918-2.633A12.191 12.191 0 0 0 14 1.75h-.055a12.222 12.222 0 0 0-8.654 3.62 12.14 12.14 0 0 0-2.603 3.905 12.255 12.255 0 0 0-.938 4.782c.01 1.9.458 3.77 1.312 5.466v4.157a1.258 1.258 0 0 0 1.258 1.258h4.16a12.288 12.288 0 0 0 5.465 1.312h.058c1.638 0 3.226-.317 4.722-.938a12.155 12.155 0 0 0 3.905-2.603 12.222 12.222 0 0 0 3.62-8.654 12.204 12.204 0 0 0-.952-4.802ZM21.166 21.23A10.118 10.118 0 0 1 14 24.172h-.046a10.208 10.208 0 0 1-4.734-1.19l-.23-.123H5.14v-3.85l-.122-.23a10.208 10.208 0 0 1-1.19-4.732A10.11 10.11 0 0 1 6.77 6.832a10.095 10.095 0 0 1 7.186-3.005h.047c1.367 0 2.693.265 3.943.79A10.107 10.107 0 0 1 21.2 6.806a10.13 10.13 0 0 1 2.978 7.24 10.133 10.133 0 0 1-3.011 7.184Z"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
