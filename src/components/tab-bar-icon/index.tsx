import React, { SVGProps, useMemo } from "react";
import { View } from "react-native";
import { iconSize } from "../../../assets/icons/constants";

type TabBarIconProps = {
  name: string;
  icon: React.ComponentType<any>;
  iconSize?: "sm" | "md" | "lg";
  active?: boolean;
};

const TabBarIcon = ({
  name,
  icon: Icon,
  active,
  iconSize,
}: TabBarIconProps) => {
  const styles = useMemo(() => {
    return active
      ? {
          className: "bg-brand-main color-white",
          stroke: "#fff",
          fill: "#fff",
        }
      : {
          className: "bg-white color-black",
          stroke: "#000",
          fill: "#000",
        };
  }, [active]);
  return (
    <View className={`p-3 rounded-lg ${styles.className}`}>
      <Icon
        fill={styles.fill}
        iconSize={iconSize || "md"}
        stroke={styles.stroke}
        name={name}
        size={28}
        color="currentColor"
      />
    </View>
  );
};

export default TabBarIcon;
