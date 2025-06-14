import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const lotes = [
  { fazenda: "Fazenda Santa Luzia", numero: 1, animais: 100, area: 15, rentavel: true },
  { fazenda: "Fazenda Santa Luzia", numero: 2, animais: 175, area: 17, rentavel: false },
  { fazenda: "Fazenda Santa Luzia", numero: 3, animais: 250, area: 25, rentavel: false },
];

const carrosselInfo = [
  { titulo: "Rentabilidade", valor: "R$27.950,18", subtitulo: "Nos últimos 30 dias" },
  { titulo: "Custos", valor: "R$5.718,00", subtitulo: "Aumento de 17%" },
  { titulo: "Animais", valor: "525", subtitulo: "Total na propriedade" },
];

export default function VisaoGeral() {
  const [filtro, setFiltro] = useState<"Geral" | "Rentáveis" | "Não Rentáveis">("Geral");

  const lotesFiltrados = lotes.filter((lote) => {
    if (filtro === "Geral") return true;
    if (filtro === "Rentáveis") return lote.rentavel;
    if (filtro === "Não Rentáveis") return !lote.rentavel;
  });

  const rentaveis = lotes.filter((l) => l.rentavel).length;
  const naoRentaveis = lotes.length - rentaveis;

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-3 pt-4 pb-2 border-b border-b-[#eee] bg-white">
        <TouchableOpacity onPress={() => {/* navegação para trás */ }}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text className="font-bold text-[18px] text-[#222]">Visão Geral</Text>
        <TouchableOpacity onPress={() => {/* ação de edição */ }}>
          <Ionicons name="settings-sharp" size={24} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Carrossel */}
      <FlatList
        data={carrosselInfo}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 4, marginBottom: 0 }}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={{
            width: width * 0.42,
            height: 90,
          }} className="bg-[#f6f6f6] rounded-xl p-3 justify-center items-start shadow">
            <Text className="font-bold text-[13px] text-[#222] mb-[2px]">{item.titulo}</Text>
            <Text className="font-bold text-[22px] mb-[2px]">{item.valor}</Text>
            <Text className="text-[12px] text-[#888]">{item.subtitulo}</Text>
          </View>
        )}
      />

      {/* Filtros */}
      <View className="flex-row gap-2 mt-1 mb-2 px-3">
        {["Geral", "Rentáveis", "Não Rentáveis"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setFiltro(tab as any)}
            className={`flex-1 p-2 rounded-full items-center ${filtro === tab ? "bg-[#014421]" : "bg-[#f0f0f0]"}`}
          >
            <Text className={`${filtro === tab ? "text-white font-bold" : "text-[#222] font-normal"}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Caixa de seleção de lotes (dropdown visual) */}
      <View className="flex-row items-center justify-between bg-[#f6f6f6] rounded-lg p-3 mx-3 mb-2">
        <Text className="text-[#666]">Lotes</Text>
        <Ionicons name="chevron-down" size={20} color="#666" />
      </View>

      {/* Cards de resumo */}
      <View className="flex-row gap-2 justify-start items-center mb-2 mx-3">
        <View className="bg-[#7fc89f] rounded-full py-1 px-3">
          <Text className="text-black font-bold text-[13px]">Rentáveis: {rentaveis}</Text>
        </View>
        <View className="bg-[#f8bcbc] rounded-full py-1 px-3">
          <Text className="text-black font-bold text-[13px]">Não Rentáveis: {naoRentaveis}</Text>
        </View>
      </View>

      {/* Lista de lotes */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {lotesFiltrados.map((lote, idx) => (
          <View key={idx} className="bg-[#f6f6f6] rounded-xl p-3 mb-2 flex-row items-center mx-3 gap-3">
            <Image
              source={require("../../assets/images/celeiro.png")}
              style={{ width: 28, height: 20, marginRight: 10 }}
              resizeMode="contain"
            />
            <View className="flex-1">
              <Text className="font-bold">{lote.fazenda}</Text>
              <Text className="text-[14px]">Lote: {lote.numero}</Text>
              <Text className="text-[12px] text-[#666]">
                Animais: {lote.animais} · Área: {lote.area} alq.p ·{" "}
                <Text className={lote.rentavel ? "text-[#006d3c]" : "text-[#b91c1c]"}>
                  {lote.rentavel ? "Rentável" : "Não Rentável"}
                </Text>
              </Text>
            </View>
            <View
              className="w-4 h-4 rounded-full ml-2"
              style={{ backgroundColor: lote.rentavel ? "#2ecc40" : "#ef4444" }}
            />
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View className="absolute left-0 right-0 bottom-0 bg-white p-4 border-t border-t-[#eee]">
        <TouchableOpacity
          className="w-full bg-[#006d3c] p-3.5 rounded-lg items-center"
          onPress={() => {/* lógica para exportar relatório */ }}
        >
          <Text className="text-white font-bold text-[16px]">Exportar relatório</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}