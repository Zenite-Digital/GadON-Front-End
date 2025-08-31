import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Colors from '../constants/Colors';
import { PreviewSection } from '../components/report/PreviewSection';
import { FiltersSection } from '../components/report/filters/FiltersSection';
import { HeaderExport } from '../components/report/HeaderExport';
import { useResponsive } from '../utils/responsive';

export default function ExportarRelatorioScreen() {
  const { isWide, maxContent, hPadding } = useResponsive();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" backgroundColor={Colors.outros.branco} />
      <HeaderExport title="Exportar Relatório" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.center, { maxWidth: maxContent, paddingHorizontal: hPadding }]}>
          <View style={[styles.stack, isWide && styles.row]}>
            <View style={[styles.col, isWide && styles.colHalf]}>
              <PreviewSection />
            </View>

            <View style={[styles.col, isWide && styles.colHalf]}>
              <FiltersSection />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.outros.branco },
  center: { alignSelf: 'center', width: '100%' },
  stack: { paddingTop: 8, paddingBottom: 24, gap: 12 },
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 16 },
  col: { gap: 12 },
  colHalf: { flex: 1, minWidth: 0 }, // 50%/50% responsivo
});