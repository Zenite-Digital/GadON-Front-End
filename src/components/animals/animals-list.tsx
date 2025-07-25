import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { Vaca } from "@assets/icons";
import { Animal } from "./animais.entidade";

type AnimalListProps = {
  animals: Animal[];
};

export default function AnimalList({ animals }: AnimalListProps) {
  const renderAnimalItem = ({ item }: { item: Animal }) => (
    <View className="bg-white rounded-lg p-4 mb-3 border border-gray-200">
      <View className="flex-row items-center">
        <View className="mr-4">
          <Vaca iconSize="md" stroke="#005E24" />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-inter-medium text-black mb-1">
            Brinco: #{item.brinco}
          </Text>
          <Text className="text-sm font-inter-regular text-gray-600">
            {item.fazenda} - {item.lote}
          </Text>
          <Text className="text-sm font-inter-regular text-gray-600">
            {item.sexo === "macho" ? "Macho" : "Fêmea"} • {item.idade} Anos •{" "}
            {item.vacinado ? "Vacinado" : "Não vacinado"}
          </Text>
        </View>
      </View>
    </View>
  );

  if (animals.length === 0) {
    return (
      <View className="flex-1 justify-center items-center py-8">
        <Vaca iconSize="lg" stroke="#ccc" />
        <Text className="text-gray-500 font-inter-regular mt-4 text-center">
          Nenhum animal encontrado{"\n"}com os filtros aplicados
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={animals}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderAnimalItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
}