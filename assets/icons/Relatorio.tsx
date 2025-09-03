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
        d="M16.3334 2.33334H7.00002C5.71669 2.33334 4.66669 3.38334 4.66669 4.66668V23.3333C4.66669 24.6167 5.71669 25.6667 7.00002 25.6667H21C22.2834 25.6667 23.3334 24.6167 23.3334 23.3333V9.33334L16.3334 2.33334ZM21 23.3333H7.00002V4.66668H15.1667V10.5H21V23.3333ZM10.5 15.1667V22.1667H8.16669V15.1667H10.5ZM17.5 17.5V22.1667H19.8334V17.5H17.5ZM12.8334 12.8333V22.1667H15.1667V12.8333H12.8334Z"
        fill={stroke} 
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
export {default as Relatorio} from './Relatorio';


