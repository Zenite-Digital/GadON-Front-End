import { Check } from "@assets/icons";
import { cn } from "@utils/cn";
import { Text, TouchableOpacity, View } from "react-native";

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  labelPosition?: "left" | "top";
  required?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  labelPosition,
  required,
}) => {
  return (
    <View
      className={cn("flex-row items-center justify-evenly", {
        "flex-col": labelPosition === "top",
      })}
    >
      {label && (
        <Text
          className={cn("ml-2", labelPosition === "top" ? "self-baseline" : "")}
        >
          {label}
          {required && <Text className="text-red-500">*</Text>}
        </Text>
      )}
      <TouchableOpacity onPress={() => onChange?.(!checked)}>
        <View
          className={cn("border rounded-md p-4", {
            "bg-blue-500 p-1": checked,
          })}
        >
          {checked && <Check fill="#fff" iconSize="md" />}
        </View>
      </TouchableOpacity>
    </View>
  );
};
