import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { Vaca } from "@assets/icons";
import { getCalfAge } from "../../utils/data";
import {
  AnimalSexo,
  FazendaAnimaisDTO,
} from "src/types/dtos/response/animal.dto";
import { useRouter } from "expo-router";

type AnimalListProps = {
  items: FazendaAnimaisDTO[];
};

export default function AnimalList({ items }: AnimalListProps) {
  const router = useRouter();
  const renderAnimalItem = ({ fazenda, animais }: FazendaAnimaisDTO) => {
    const elementosAnimais = animais.map((item) => (
      <View
        key={`animal-${item.id}-fazenda-${fazenda.id}`}
        className="bg-white rounded-lg p-4 mb-3 border border-gray-200"
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => {
          router.push({
            pathname: `/animais/update`,
            params: { animalId: item.id }
          })
        }}
        accessibilityRole="button"
      >
        <View className="flex-row items-center">
          <View className="mr-4">
            <Vaca iconSize="md" stroke="#005E24" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-inter-medium text-black mb-1">
              {/* Brinco: #{item.brinco} */}
              Brinco: ???
            </Text>
            <Text className="text-sm font-inter-regular text-gray-600">
              {fazenda.nome} - {item.lote?.nome}
            </Text>
            <Text className="text-sm font-inter-regular text-gray-600">
              {item.sexo === AnimalSexo.M ? "Macho" : "Fêmea"} •{" "}
              {item.dataNascimento ? getCalfAge(item.dataNascimento) : ""} •{" "}
              {item.vacinado ? "Vacinado" : "Não vacinado"} • {item.status}
            </Text>
          </View>
        </View>
      </View>
    ));

    return <>{elementosAnimais}</>;
  };

  if (items.length === 0) {
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
      data={items}
      keyExtractor={(item) => item.fazenda.id}
      renderItem={({ item }) => renderAnimalItem(item)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
}
