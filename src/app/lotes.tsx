import React from "react";
import { SafeAreaView } from "react-native";
import LotesList from "@components/lotes/index";
import ExportButton from "@components/export-button/index";
import { styles } from "@components/lotes/styles";

export default function LotesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LotesList />
      <ExportButton />
    </SafeAreaView>
  );
}