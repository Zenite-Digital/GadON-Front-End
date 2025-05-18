import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text, View } from "@components/Themed";

type TemplateProps = {
    text?: string;
} & TouchableOpacityProps;

const TemplateComponent: React.FC<TemplateProps> = ({
    text = "Template Components",
    ...props
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            className="w-[200px] bg-brand-main h-[52px] rounded-[10px] justify-center items-center"
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

export default TemplateComponent;
