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
  variant?: "outline" | "solid";
  text?: string;
  slots?: {
    text?: {
      className?: string;
    };
  };
  className?: string;
};

const Button = ({
  className,
  color = "light",
  variant = "solid",
  text,
  slots,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const theme = useMemo(() => buttonColors[color][variant], [color, variant]);

  return (
    <Pressable
      className={cn(
        "min-w-2 p-2 rounded-lg items-center",
        theme.button,
        !fullWidth ? "self-start" : "w-full",
        className
      )}
      style={{
        width: "auto",
      }}
      {...props}
    >
      {({ pressed }) => (
        <Text
          className={cn(
            pressed ? theme.text.pressed : theme.text.default,
            slots?.text?.className
          )}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
