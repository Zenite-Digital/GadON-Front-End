import { FontAwesome } from "@expo/vector-icons";
import React from "react";

type FontAwesomeIconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
};

const FontAwesomeIcon = ({ name }: FontAwesomeIconProps) => {
  return (
    <FontAwesome
      name={name}
      size={28}
      style={{ marginBottom: -3 }}
      color="currentColor"
    />
  );
};

export default FontAwesomeIcon;
