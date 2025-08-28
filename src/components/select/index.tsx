import { ChevronBaixo, ChevronCima } from "@assets/icons";
import { cn } from "@utils/cn";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  options: { label: string; value: string }[];
  title?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
};

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  title,
  required,
  error,
  placeholder = "Selecione",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const hasError = Boolean(error);

  return (
    <View>
      <View>
        {title && (
          <Text className={cn("mb-2 ml-2", hasError ? "text-red-500" : "")}>
            {title}
            {required && <Text className="text-red-500"> *</Text>}
          </Text>
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          className={cn(
            "border  p-4 text-base bg-white font-inter-regular flex flex-row justify-between",
            hasError ? "border-red-500" : "border-gray-300",
            isOpen ? "rounded-t-lg" : "rounded-lg"
          )}
          onPress={() => setIsOpen(!isOpen)}
        >
          {selectedValue ? (
            <Text>{selectedValue}</Text>
          ) : (
            <Text className="text-gray-400">{placeholder}</Text>
          )}
          {isOpen ? <ChevronCima /> : <ChevronBaixo />}
        </TouchableOpacity>
        {isOpen && (
          <View className="z-50 w-full bg-white border border-gray-300 rounded-b-lg border-t-0">
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                className="p-4 hover:bg-gray-100 z-50 last:rounded-b-lg"
                onPress={() => {
                  setSelectedValue(option.label);
                  onChange?.(option.value);
                  setIsOpen(false);
                }}
              >
                <Text>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {hasError && <Text className="text-sm color-red-500">{error}</Text>}
      </View>
    </View>
  );
};
