import React from "react";
import Colors from "@constants/Colors";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CaixaLotes() {
  return (
    <View 
      className="flex-row items-center justify-between rounded-lg px-4 py-3 mx-3 mb-2"
      style={{ backgroundColor: Colors.light.background }}
    >
      <Text 
        className="text-[15px]"
        style={{ color: Colors.light.tabIconDefault }}
      >
        Lotes
      </Text>
      <Ionicons 
        name="chevron-down" 
        size={20} 
        color={Colors.light.tabIconDefault} 
      />
    </View>
  );
}