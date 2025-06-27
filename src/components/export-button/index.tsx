
import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "@components/lotes/styles";

export default function LotesFooter() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.exportButton}
        onPress={() => Alert.alert("Exportar", "Exportar relatório dos lotes")}
      >
        <Text style={styles.exportButtonText}>Exportar relatório</Text>
      </TouchableOpacity>
    </View>
  );
}