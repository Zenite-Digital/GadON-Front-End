import React, { useState, useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import Button from "@components/button";
import ExportButton from "@components/export-button";
import animalsData from "@components/animals/mocks/animals.mocks";
import AnimalFilters from "@components/animals/animals-filter";
import AnimalList from "@components/animals/animals-list";

type AnimalFilters = {
  brinco: string;
  sexo: "todos" | "macho" | "femea";
  idadeMin: string;
  idadeMax: string;
  vacinado: "todos" | "sim" | "nao";
};

export default function Animais() {
  const [filters, setFilters] = useState<AnimalFilters>({
    brinco: "",
    sexo: "todos",
    idadeMin: "",
    idadeMax: "",
    vacinado: "todos",
  });

  const filteredAnimals = useMemo(() => {
    return animalsData.filter((animal) => {
      // Filtro por brinco
      if (filters.brinco && !animal.brinco.includes(filters.brinco)) {
        return false;
      }

      // Filtro por sexo
      if (filters.sexo !== "todos" && animal.sexo !== filters.sexo) {
        return false;
      }

      // Filtro por idade
      if (filters.idadeMin && animal.idade < parseInt(filters.idadeMin)) {
        return false;
      }
      if (filters.idadeMax && animal.idade > parseInt(filters.idadeMax)) {
        return false;
      }

      // Filtro por vacinação
      if (filters.vacinado !== "todos") {
        const isVacinado = filters.vacinado === "sim";
        if (animal.vacinado !== isVacinado) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

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

          <AnimalList animals={filteredAnimals} />
        </View>
      </ScrollView>

  {/* Footer com ações: exportar (menor) à esquerda e adicionar animais à direita */}
  <ExportButton />
    </View>
  );
}