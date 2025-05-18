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
                strokeWidth={1.5}
                d="M14 23.333h10.5M19.105 4.226a2.476 2.476 0 1 1 3.503 3.502L8.596 21.741c-.277.277-.62.48-.997.59l-3.351.978a.583.583 0 0 1-.723-.724l.977-3.35c.11-.377.313-.72.59-.997L19.106 4.226Z"
            />
        </Svg>
    );
};
const Memo = memo(SvgComponent);
export default Memo;
