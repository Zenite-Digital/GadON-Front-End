import { cn } from "@utils/cn";
import { TextInputProps } from "react-native";
import { TextInput as TextInputNative } from "react-native";

const TextInput: React.FC<TextInputProps> = ({ className, ...props }) => {
  return (
    <TextInputNative
      {...props}
      placeholderTextColor="#828282"
      className={cn(
        "border border-gray-300 rounded-lg p-4 text-base bg-white font-inter-regular",
        className
      )}
    />
  );
};

export default TextInput;
