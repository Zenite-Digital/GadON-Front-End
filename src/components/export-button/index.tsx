
import React from "react";
import { View, TouchableOpacity, Text, Platform, Dimensions } from "react-native";
import { styles } from "@components/lotes/styles";

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && width > 1024;

export default function ExportButton() {
  const handleExport = () => {
    
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.exportButton}
        onPress={handleExport}
        activeOpacity={0.8}
        accessibilityLabel="Exportar relatório dos lotes"
        accessibilityHint="Toque para escolher o formato de exportação"
      >
        
        <Text style={[styles.exportButtonText, !isWeb && { marginLeft: 0 }]}>
          {isDesktop ? "Exportar relatório" : "Exportar relatório"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}