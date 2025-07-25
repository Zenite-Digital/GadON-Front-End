import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Lote = {
  fazenda: string;
  numero: number;
  animais: number;
  area: number;
  rentavel: boolean;
};

type Props = {
  lotes: Lote[];
};

export default function Lotes({ lotes }: Props) {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
      {lotes.map((lote, idx) => (
        <View key={idx} className="bg-[#f3f4f6] rounded-xl p-3 mb-3 flex-row items-center mx-3 gap-3">
          <Ionicons name="business" size={24} color="#222" style={{ marginRight: 6 }} />
          <View className="flex-1">
            <Text className="font-bold text-[15px]">{lote.fazenda}</Text>
            <Text className="text-[14px] font-semibold">Lote: {lote.numero}</Text>
            <Text className="text-[13px] text-[#666]">
              Animais: {lote.animais} · Área: {lote.area} alq.p ·{" "}
              <Text className={lote.rentavel ? "text-[#22c55e] font-bold" : "text-[#ef4444] font-bold"}>
                {lote.rentavel ? "Rentável" : "Não Rentável"}
              </Text>
            </Text>
          </View>
          <View
            className="w-4 h-4 rounded-full ml-2"
            style={{ backgroundColor: lote.rentavel ? "#22c55e" : "#ef4444" }}
          />
        </View>
      ))}
    </ScrollView>
  );
}