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
                d="M3.5 7h21m-2.333 0v16.333c0 1.167-1.167 2.334-2.334 2.334H8.167c-1.167 0-2.334-1.167-2.334-2.334V7m3.5 0V4.667c0-1.167 1.167-2.334 2.334-2.334h4.666c1.167 0 2.334 1.167 2.334 2.334V7m-7 5.833v7m4.666-7v7"
            />
        </Svg>
    );
};
const Memo = memo(SvgComponent);
export default Memo;
