import Colors from "@constants/Colors";
import { cn } from "@utils/cn";
import React, { useMemo } from "react";
import { Text, TouchableHighlight } from "react-native";

type ButtonProps = {
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
  variant?: "default" | "outline" | "text";
  text?: string;
  slots?: {
    text?: {
      className?: string;
    };
  };
  onPress?: () => void;
  className?: string;
};

const colors = {
  main: {
    button: "bg-brand-main active:bg-brand-secondary",
    text: "text-white",
    buttonHighlight: Colors.brand.secondary,
  },
  primary: {
    button: "bg-estados-normal-primary active:bg-estados-hover-primary",
    text: "text-white",
    buttonHighlight: Colors.estados.hover.primary,
  },
  secondary: {
    button: "bg-estados-normal-secondary active:bg-estados-hover-secondary",
    text: "text-white",
    buttonHighlight: Colors.estados.hover.secondary,
  },
  success: {
    button: "bg-estados-normal-success active:bg-estados-hover-success",
    text: "text-white",
    buttonHighlight: Colors.estados.hover.success,
  },
  danger: {
    button: "bg-estados-normal-danger active:bg-estados-hover-danger",
    text: "text-white",
    buttonHighlight: Colors.estados.hover.danger,
  },
  warning: {
    button: "bg-estados-normal-warning active:bg-estados-hover-warning",
    text: "text-black",
    buttonHighlight: Colors.estados.hover.warning,
  },
  info: {
    button: "bg-estados-normal-info active:bg-estados-hover-info",
    text: "text-black",
    buttonHighlight: Colors.estados.hover.info,
  },
  light: {
    button: "bg-estados-normal-light active:bg-estados-hover-light",
    text: "text-black",
    buttonHighlight: Colors.estados.hover.light,
  },
  dark: {
    button: "bg-estados-normal-dark active:bg-estados-hover-dark",
    text: "text-white",
    buttonHighlight: Colors.estados.hover.dark,
  },
};

const Button = ({
  className,
  color,
  variant,
  text,
  slots,
  fullWidth = false,
}: ButtonProps) => {
  const theme = useMemo(() => {
    if (color && colors[color]) {
      return colors[color];
    }
    return colors.secondary;
  }, [color]);

  return (
    <TouchableHighlight
      className={cn(
        "min-w-2 p-2 rounded-lg items-center",
        theme.button,
        !fullWidth ? "self-start" : "w-full",
        className
      )}
      style={{
        width: "auto",
      }}
      underlayColor={theme.buttonHighlight}
    >
      <Text className={cn(theme.text, slots?.text?.className)}>{text}</Text>
    </TouchableHighlight>
  );
};

export default Button;
