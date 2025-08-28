import { cn } from "@utils/cn";
import { FormikErrors } from "formik";
import { useCallback, useState } from "react";
import {
  Modal,
  Text,
  TextInputProps as TextInputNativeProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DateTimePicker, { useDefaultStyles } from "react-native-ui-datepicker";

type DatePickerProps = {
  required?: boolean;
  error?: FormikErrors<Date>;
  value?: Date;
  onChange?: (date: Date) => void;
  title?: string;
};

const DatePicker: React.FC<DatePickerProps> = ({
  error,
  value: valueProp,
  onChange,
  required,
  title,
}) => {
  const [value, setValue] = useState(valueProp);
  const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);

  const hasError = Boolean(error);

  const handleChangeDate = useCallback(
    (date: Date) => {
      setValue(date);
      onChange?.(date);
    },
    [onChange]
  );

  return (
    <View>
      <View>
        {title && (
          <Text className="mb-2 ml-2">
            {title}
            {required && <Text className="text-red-500"> *</Text>}
          </Text>
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setDatePickerVisible(true)}
          className={cn(
            "border rounded-lg p-4 text-base bg-white font-inter-regular",
            hasError ? "border-red-500" : "border-gray-300"
          )}
        >
          <Text>{value?.toLocaleDateString()}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent
        animationType="fade"
        visible={datePickerVisible}
        onRequestClose={() => setDatePickerVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setDatePickerVisible(false)}
          className="flex-1 bg-[rgba(0,0,0,0.3)] justify-center items-center"
        >
          <TouchableWithoutFeedback>
            <View className="mx-4 bg-white rounded-lg overflow-hidden max-w-xl">
              <DateTimePicker
                mode="single"
                date={value}
                locale="pt-BR"
                weekdaysFormat="short"
                monthCaptionFormat="full"
                onChange={({ date }) => {
                  handleChangeDate(date as Date);
                  setDatePickerVisible(false);
                }}
                maxDate={new Date()}
                monthsFormat="short"
                styles={useDefaultStyles("light")}
              />
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
        {hasError && <Text>{error + ""}</Text>}
      </Modal>
    </View>
  );
};

export default DatePicker;
