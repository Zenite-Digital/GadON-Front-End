import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function Footer() {
  return (
    <View className="absolute left-0 right-0 bottom-0 bg-white p-4 border-t border-t-[#e5e7eb]">
      <TouchableOpacity
        className="w-full bg-[#166534] py-4 rounded-lg items-center"
      >
        <Text className="text-white font-bold text-[17px]">Exportar relatório</Text>
      </TouchableOpacity>
    </View>
  );
}