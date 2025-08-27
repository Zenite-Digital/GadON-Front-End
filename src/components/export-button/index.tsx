import React from "react";
import { View, TouchableOpacity, Text, Platform, Dimensions } from "react-native";
import { styles } from "@components/lotes/styles";
import { useRouter } from "expo-router";
import { iconSize } from "@assets/icons/constants";
import { addAnimalsToDb } from "@utils/animals.crud";

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && width > 1024;

export default function ExportButton() {
  const router = useRouter();

  const handleExport = () => {
    router.push("/exportar-relatorio");
  };

  const handleAddAnimals = async () => {
    try {
      await addAnimalsToDb();
    } catch (err) {
      console.error("Erro ao adicionar animais", err);
    }
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.exportButtonSmall}
        onPress={handleExport}
        activeOpacity={0.8}
        accessibilityLabel="Exportar relatório dos lotes"
        accessibilityHint="Toque para abrir a tela de exportação"
      >
        <Text style={[styles.exportButtonText]}>Exportar</Text>
  </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddAnimals}
        activeOpacity={0.8}
        accessibilityLabel="Adicionar"
        accessibilityHint="Toque para adicionar animais ao banco de dados"
      >
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}