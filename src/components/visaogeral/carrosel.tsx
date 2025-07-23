import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

type CarouselItem = {
  titulo: string;
  valor: string;
  subtitulo: string;
  animais?: number;
};

type Props = {
  data: CarouselItem[];
};

export default function Carrosel({ data }: Props) {
  const cardWidth = (width - 64) / 2;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ height: 70 }} // Diminuído de 90 para 70
      contentContainerStyle={{
        gap: 12,
        paddingHorizontal: 16,
      }}
    >
      {data.map((item, idx) => (
        <View
          key={idx}
          style={{
            width: cardWidth,
            height: 70, // Diminuído de 90 para 70
            justifyContent: "center",
          }}
          className="bg-white rounded-xl px-3 py-1 shadow border border-[#e5e7eb]"
        >
          <Text className="font-bold text-[11px] text-[#222] mb-1">{item.titulo}</Text>
          <Text className="font-extrabold text-[14px] mb-1">{item.valor}</Text>
          <Text className="text-[10px] text-[#888]">{item.subtitulo}</Text>
          {item.animais !== undefined && (
            <Text className="text-[10px] text-[#888] mt-1">
              Animais: {item.animais}
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}