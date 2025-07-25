import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type FiltroType = "Geral" | "Rentáveis" | "Não Rentáveis";

type FiltrosProps = {
  filtro: FiltroType;
  setFiltro: React.Dispatch<React.SetStateAction<FiltroType>>;
};

const tabs: FiltroType[] = ["Geral", "Rentáveis", "Não Rentáveis"];

export default function Filtros({ filtro, setFiltro }: FiltrosProps) {
  return (
    <View className="flex-row gap-2 mt-0 mb-2 px-4">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setFiltro(tab)}
          className={`flex-1 py-2 rounded-full items-center ${filtro === tab ? "bg-[#14532d]" : "bg-[#f3f4f6]"}`}
        >
          <Text className={`${filtro === tab ? "text-white font-bold" : "text-[#222] font-semibold"}`}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}