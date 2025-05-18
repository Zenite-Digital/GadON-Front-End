import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";
const SvgComponent = ({ stroke = "#000", ...props }: SvgProps) => {
    return (
        <Svg width={28} height={28} fill="none" {...props}>
            <Path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.667}
                d="m10.5 21 7-7-7-7"
            />
        </Svg>
    );
};
const Memo = memo(SvgComponent);
export default Memo;
