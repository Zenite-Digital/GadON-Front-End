import { ChevronBaixo } from "@assets/icons";
import { cn } from "@utils/cn";
import { FormikErrors } from "formik";
import {
  Text,
  TextInputProps as TextInputNativeProps,
  View,
} from "react-native";
import { TextInput as TextInputNative } from "react-native";

type TextInputProps = TextInputNativeProps & {
  error?: FormikErrors<string>;
  title?: string;
  required?: boolean;
  slots?: {
    textInput?: {
      className?: string;
    };
  };
  rightIcon?: React.ReactNode;
};

const TextInput: React.FC<TextInputProps> = ({
  className,
  error,
  title,
  required,
  slots,
  rightIcon,
  ...props
}) => {
  const hasError = Boolean(error);
  return (
    <View>
      {title && (
        <Text className={cn("mb-2 ml-2", hasError ? "text-red-500" : "")}>
          {title}
          {required && <Text className="text-red-500"> *</Text>}
        </Text>
      )}
      <View
        className={cn(
          "border rounded-lg text-base bg-white flex flex-row items-center",
          className,
          hasError ? "border-red-500" : "border-gray-300"
        )}
      >
        <TextInputNative
          {...props}
          className={cn(
            "font-inter-regular p-4 rounded-lg w-full",
            slots?.textInput?.className
          )}
          placeholderTextColor="#828282"
        />
        {rightIcon}
      </View>
      {hasError && <Text className="text-sm color-red-500">{error}</Text>}
    </View>
  );
};

export default TextInput;
