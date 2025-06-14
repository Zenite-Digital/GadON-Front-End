import { FontAwesome } from "@expo/vector-icons";
import React from "react";

type FontAwesomeIconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  onPress?: () => void;
  className?: string;
};

const FontAwesomeIcon = ({
  name,
  className,
  onPress,
}: FontAwesomeIconProps) => {
  return (
    <FontAwesome
      classname={className}
      onPress={onPress}
      name={name}
      size={28}
      style={{ marginBottom: -3 }}
      color="currentColor"
    />
  );
};

export default FontAwesomeIcon;
