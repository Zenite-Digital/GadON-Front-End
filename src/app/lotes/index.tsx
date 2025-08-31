import React, { useState, useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import Button from "@components/button";
import { useIsFocused } from "@react-navigation/native";
import { router, useLocalSearchParams } from "expo-router";
import LotesList from "@components/lotes";


const lotes: any[] = [];

const filtroOptions = [
  { label: "Nome", value: "nome" },
  { label: "Área", value: "area" },
  { label: "Quantidade de Animais", value: "animais" },
];
export default function Lotes() {
  const isFocused = useIsFocused();
  const {id} = useLocalSearchParams<{id: string}>();

  return (
    <View className="flex-1 bg-white">
        <LotesList />

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
          onPress={() => router.push({
            pathname: "/lotes/cadastro",
            params: {
              fazendaId: id
            }
          })}
          text="Adicionar"
        />
      </View>
    </View>
  );
}
