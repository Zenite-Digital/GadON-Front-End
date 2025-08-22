import { TextInputProps } from "react-native";

const TextInput: React.FC<TextInputProps> = ({ className, ...props }) => {
  return (
    <TextInput
      {...props}
      className={`border border-gray-300 rounded-lg p-4 text-base bg-white mb-4 font-inter-regular `}
    />
  );
};

export default TextInput;
