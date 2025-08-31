import Colors from "@constants/Colors";
import React from "react";
import {
  SafeAreaView,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewProps,
} from "react-native";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  onPress?: TouchableHighlightProps["onPress"];
  touchableProps?: Omit<TouchableHighlightProps, "onPress" | "underlayColor">;
};

type PlaceholderProps = {
  children?: React.ReactNode;
  className?: string;
  onPress?: TouchableHighlightProps["onPress"];
  touchableProps?: Omit<TouchableHighlightProps, "onPress" | "underlayColor">;
  wrapperProps?: ViewProps;
};

const TouchableWrapper: React.FC<{
  onPress?: TouchableHighlightProps["onPress"];
  touchableProps?: Omit<TouchableHighlightProps, "onPress" | "underlayColor">;
  wrapperProps?: ViewProps;
  children?: React.ReactNode;
}> = ({ onPress, touchableProps, wrapperProps, children }) => {
  if (onPress) {
    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={Colors.outros.hover}
        {...touchableProps}
      >
        <View {...wrapperProps}>{children}</View>
      </TouchableHighlight>
    );
  }
  return <View {...wrapperProps}>{children}</View>;
};

export const CardHeader = ({
  children,
  onPress,
  touchableProps,
  wrapperProps,
}: PlaceholderProps) => {
  return (
    <TouchableWrapper
      onPress={onPress}
      touchableProps={touchableProps}
      wrapperProps={wrapperProps}
    >
      {children}
    </TouchableWrapper>
  );
};

export const CardContent = ({
  children,
  onPress,
  touchableProps,
  wrapperProps,
}: PlaceholderProps) => {
  return (
    <TouchableWrapper
      onPress={onPress}
      touchableProps={touchableProps}
      wrapperProps={wrapperProps}
    >
      {children}
    </TouchableWrapper>
  );
};

export const CardFooter = ({
  children,
  onPress,
  touchableProps,
  wrapperProps,
}: PlaceholderProps) => {
  return (
    <TouchableWrapper
      onPress={onPress}
      touchableProps={touchableProps}
      wrapperProps={wrapperProps}
    >
      {children}
    </TouchableWrapper>
  );
};

const Card = ({ children, onPress, touchableProps }: CardProps) => {
  return (
    <TouchableHighlight
      className="flex-1 m-2 p-2 bg-white rounded-2xl active:bg-outros-hover"
      underlayColor={Colors.outros.hover}
      onPress={onPress}
      {...touchableProps}
    >
      <SafeAreaView className="flex flex-1 w-full gap-3 overflow-hidden justify-between">
        {children}
      </SafeAreaView>
    </TouchableHighlight>
  );
};

export default Card;
