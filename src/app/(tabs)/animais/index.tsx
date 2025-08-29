import React, { useState, useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import Button from "@components/button";
import AnimalFilters from "@components/animals/animals-filter";
import AnimalList from "@components/animals/animals-list";
import { useQuery } from "@tanstack/react-query";
import { listAllAnimaisGroupedByFazenda } from "src/services/animais.api";
import { useIsFocused } from "@react-navigation/native";
import { Add } from "@assets/icons";
import { router } from "expo-router";

type AnimalFilters = {
  brinco: string;
  sexo: "todos" | "macho" | "femea";
  idadeMin: string;
  idadeMax: string;
  vacinado: "todos" | "sim" | "nao";
};

export default function Animais() {
  const isFocused = useIsFocused();

  const [filters, setFilters] = useState<AnimalFilters>({
    brinco: "",
    sexo: "todos",
    idadeMin: "",
    idadeMax: "",
    vacinado: "todos",
  });

  const { data: animaisAgrupados } = useQuery({
    queryKey: ["animais", "agrupados", "fazenda"],
    queryFn: listAllAnimaisGroupedByFazenda,
    subscribed: isFocused,
  });

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-6">
          <Text className="text-base font-inter-regular text-gray-700 mb-4">
            Dados do animal
          </Text>

          <AnimalFilters filters={filters} onFiltersChange={setFilters} />

          {animaisAgrupados && <AnimalList items={animaisAgrupados} />}
        </View>
      </ScrollView>

      <View className="absolute bottom-6 right-6 m-0 p-0 flex flex-row gap-4">
        <Button
          variant="solid"
          className="rounded-xl text-lg p-4"
          color="main"
          onPress={() => router.push("/exportar-relatorio")}
          text="Exportar Relatório"
        />
        <Button
          variant="solid"
          className="rounded-xl text-lg p-4"
          color="main"
          onPress={() => router.push("/animais/cadastro")}
          text="Adicionar"
        />
      </View>
    </View>
  );
}
