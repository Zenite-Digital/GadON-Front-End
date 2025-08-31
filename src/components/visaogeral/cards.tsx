import React from "react";
import { View, Text } from "react-native";

type Props = {
  rentaveis: number;
  naoRentaveis: number;
};

export default function Cards({ rentaveis, naoRentaveis }: Props) {
  return (
    <View className="flex-row gap-2 justify-start items-center mb-3 mx-3">
      <View className="bg-[#22c55e]/30 rounded-full py-1 px-3">
        <Text className="text-[#14532d] font-bold text-[15px]">Rentáveis: {rentaveis}</Text>
      </View>
      <View className="bg-[#f87171]/30 rounded-full py-1 px-3">
        <Text className="text-[#b91c1c] font-bold text-[15px]">Não Rentáveis: {naoRentaveis}</Text>
      </View>
    </View>
  );
}