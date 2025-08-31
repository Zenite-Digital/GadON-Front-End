import TextInput from "@components/text-input";
import { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ChevronBaixo, ChevronCima, Loader } from "@assets/icons";

type AutoCompleteProps = {
  value?: string;
  onChange?: (value: string) => void;
  options: { label: string; value: string }[];
  title?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  queryFn?: (query: string) => void;
  queryTime?: number;
  isQueryPending?: boolean;
  disabled?: boolean;
};

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  value,
  onChange,
  options,
  title,
  required,
  error,
  placeholder = "Digite para buscar...",
  queryFn,
  queryTime = 1000,
  isQueryPending,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    { label: string; value: string } | undefined
  >(options.find((i) => i.value === value));
  const hasError = Boolean(error);

  // Debounce manual: guarda o timer em ref para evitar re-criar efeitos
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChangeIsOpen = (open: boolean) => {
    if (!disabled) setIsOpen(open);
  };

  const handleChangeValue = (value: string) => {
    if (disabled) return;
    const option = options.find((i) => i.value === value);
    setSelectedOption(option);
    setSearchText(option?.label || "");
    onChange?.(value);
    setIsOpen(false);
  };

  const handleChangeText = (text: string) => {
    setSearchText(text);
    setShowLoading(true);

    if (disabled) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      queryFn?.(text);
    }, queryTime);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showLoading && !isQueryPending) {
      setShowLoading(false);
    }
  }, [isQueryPending]);

  return (
    <View
      className={disabled ? "opacity-50" : ""}
      pointerEvents={disabled ? "none" : "auto"}
    >
      <TextInput
        className={isOpen ? "rounded-t-lg" : "rounded-lg"}
        title={title}
        required={required}
        onFocus={() => handleChangeIsOpen(true)}
        onBlur={() => setTimeout(() => handleChangeIsOpen(false), 100)}
        editable={!disabled}
        value={isOpen || !selectedOption ? searchText : selectedOption.label}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        rightIcon={
          isOpen ? (
            <ChevronCima className="absolute right-2" />
          ) : (
            <ChevronBaixo className="absolute right-2" />
          )
        }
      />
      {isOpen && (
        <View className="z-50 w-full bg-white border border-gray-300 rounded-b-lg border-t-0">
          {isQueryPending || showLoading ? (
            <View className="w-full flex flex-row justify-center items-center p-4">
              <Loader className="animate-spin" />
            </View>
          ) : options?.length > 0 ? (
            options.map((option) => (
              <TouchableOpacity
                key={option.value}
                className="p-4 hover:bg-gray-100 z-50 last:rounded-b-lg"
                disabled={disabled}
                onPressIn={() => {
                  handleChangeValue(option.value);
                }}
              >
                <Text>{option.label}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text className="p-4">
              {searchText
                ? "Nenhum resultado encontrado"
                : "Digite para buscar"}
            </Text>
          )}
        </View>
      )}
      {hasError && <Text className="text-sm color-red-500">{error}</Text>}
    </View>
  );
};
