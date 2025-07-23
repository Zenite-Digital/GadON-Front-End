import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className="flex-row items-center justify-between px-4 pt-6 pb-3 bg-white">
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={24} color="#222" />
      </TouchableOpacity>
      <Text className="font-bold text-lg text-[#222]">Visão Geral</Text>
      <TouchableOpacity>
        <Ionicons name="settings-sharp" size={24} color="#222" />
      </TouchableOpacity>
    </View>
  );
}