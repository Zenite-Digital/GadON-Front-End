// import { ChevronDireita } from "@assets/icons";
// import Card from "@components/card";
// import Colors from "@constants/Colors";
// import Lote from "../../constants/mock-data/LotesCards";
// import { router } from "expo-router";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import Colors from "@constants/Colors";
import Vaca from "@assets/icons/Vaca"; // Exemplo de uso do ícone customizado

type Lote = {
  id: number;
  nome: string;
  area: string;
  animais: number;
  imagem: any;
};

type LoteCardProps = {
  item: Lote;
  expanded: boolean;
  onExpand: (id: number) => void;
};

export default function LoteCard({ item, expanded, onExpand }: LoteCardProps) {
  return (
    <View className={`bg-white rounded-xl shadow p-4 mb-4 ${expanded ? "border-2 border-blue-500" : ""}`}>
      <View className="flex-row items-center">
        {/* Use o ícone customizado se quiser */}
        {/* <Vaca iconSize="md" stroke={Colors.light.tint} /> */}
        <Image
          source={require("../../assets/images/celeiro.png")}
          style={{ width: 28, height: 28, marginRight: 10 }}
          resizeMode="contain"
        />
        <View className="flex-1">
          <Text className="font-bold text-base text-gray-800">{item.nome}</Text>
          <Text className="text-gray-500 text-xs">
            Área: {item.area} · Animais: {item.animais}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onExpand(item.id)}>
          <AntDesign
            name={expanded ? "up" : "down"}
            size={22}
            color={Colors.light.text}
          />
        </TouchableOpacity>
      </View>
      {expanded && (
        <View className="mt-4">
          <Image
            source={item.imagem}
            className="w-full h-32 rounded-lg mb-3"
            resizeMode="cover"
          />
          <TouchableOpacity
            className="flex-row items-center bg-blue-500 px-3 py-2 rounded-lg self-end"
            onPress={() => Alert.alert("Editar", "Editar informações do lote")}
          >
            <Feather name="edit" size={18} color="#fff" />
            <Text className="text-white ml-2 font-semibold">Editar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}