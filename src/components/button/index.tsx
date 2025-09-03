import Colors from "@constants/Colors";
import { cn } from "@utils/cn";
import React, { useMemo } from "react";
import {
  Pressable,
  PressableProps,
  Text,
  TouchableHighlight,
} from "react-native";
import { buttonColors } from "./styles";
import FontAwesomeIcon from "@components/font-awesome-icon";

type ButtonProps = PressableProps & {
  color?:
    | "main"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  fullWidth?: boolean;
  variant?: "outline" | "solid" | "text";
  text?: string;
  slots?: {
    text?: {
      className?: string;
    };
  };
  className?: string;
  Icon?: React.ReactNode;
};

const Button = ({
  className,
  color = "light",
  variant = "solid",
  text,
  Icon,
  slots,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const theme = useMemo(() => buttonColors[color][variant], [color, variant]);

  return (
    <Pressable
      className={cn(
        "flex flex-row min-w-2 p-2 m-0 rounded-lg items-center justify-center",
        theme.button,
        !fullWidth ? "self-start" : "w-full",
        className
      )}
      {...props}
    >
      {({ pressed }) => (
        <>
          {Icon}
          <Text
            className={cn(
              pressed ? theme.text.pressed : theme.text.default,
              slots?.text?.className
            )}
          >
            {text}
          </Text>
        </>
      )}
    </Pressable>
  );
};

export default Button;
