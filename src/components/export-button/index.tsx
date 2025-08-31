import React from "react";
import { View, TouchableOpacity, Text, Platform, Dimensions } from "react-native";
import { styles } from "@components/lotes/styles";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { iconSize } from "@assets/icons/constants";

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && width > 1024;

export default function ExportButton() {
  const router = useRouter();

  const handleExport = () => {
    router.push("/exportar-relatorio");
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.exportButton}
        onPress={handleExport}
        activeOpacity={0.8}
        accessibilityLabel="Exportar relatório dos lotes"
        accessibilityHint="Toque para abrir a tela de exportação"
      >
        <Feather name="file-text" size={iconSize.md} color={"#fff"} />
        <Text style={[styles.exportButtonText, !isWeb && { marginLeft: 8 }]}>
          {isDesktop ? "Exportar relatório" : "Exportar relatório"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}