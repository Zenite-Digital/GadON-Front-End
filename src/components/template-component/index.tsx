import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text, View } from "@components/Themed";
import { styles } from "./styles";

type TemplateProps = {
    text?: string;
} & TouchableOpacityProps;

const TemplateComponent: React.FC<TemplateProps> = ({text = "Template Components", ...props}) => {
    return (
        <TouchableOpacity activeOpacity={0.75} style={styles.button}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default TemplateComponent;