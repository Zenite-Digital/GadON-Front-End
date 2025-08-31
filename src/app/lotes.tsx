import React from "react";
import { View, StatusBar, Platform, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import LotesList from "@components/lotes/index";
import ExportButton from "@components/export-button/index";
import { styles } from "@components/lotes/styles";


const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';


export default function LotesScreen() {

  return (
    <SafeAreaView style={styles.container}>

      <LotesList />
      <ExportButton />
    </SafeAreaView>
  );
}