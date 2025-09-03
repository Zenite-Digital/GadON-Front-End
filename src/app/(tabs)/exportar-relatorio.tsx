import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

import Colors from '../../constants/Colors';
import { HeaderExport } from '../../components/report/HeaderExport';
import { PreviewSection } from '../../components/report/PreviewSection';
import { FiltersSection } from '../../components/report/filters/FiltersSection';
import { useResponsive } from '../../utils/responsive';

import Fazendas from '../../constants/mock-data/FazendaCards';
import * as FileSystem from 'expo-file-system';

export default function ExportarRelatorioScreen() {
  const { isWide, maxContent, hPadding } = useResponsive();

  async function exportReport() {
    try {
      const headers = ['id','fazenda','animais','rentavel','receitaEstimada','proprietario'];
      const rows = Fazendas.map(f =>
        [
          f.id,
          `"${String(f.fazenda).replace(/"/g, '""')}"`,
          String(f.animais ?? ''),
          String(Boolean(f.rentavel)),
          String(f.receitaEstimada ?? ''),
          `"${String(f.proprietario ?? '').replace(/"/g, '""')}"`
        ].join(',')
      );
      const csv = [headers.join(','), ...rows].join('\n');

      if (Platform.OS === 'web') {
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'exportar_relatorio.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        return;
      }

      const fileUri = FileSystem.cacheDirectory + 'exportar_relatorio.csv';
      await FileSystem.writeAsStringAsync(fileUri, csv, { encoding: FileSystem.EncodingType.UTF8 });

      Alert.alert('Exportar', `CSV salvo em: ${fileUri}`);
    } catch (err: any) {
      console.error(err);
      Alert.alert('Erro', err?.message || 'Falha ao exportar');
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      <Stack.Screen options={{ headerShown: false }} />

      <StatusBar style="dark" backgroundColor={Colors.outros.branco} />
      <HeaderExport title="Exportar Relatório" />

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View
          className="w-full"
          style={{
            maxWidth: maxContent,
            paddingHorizontal: hPadding,
            alignSelf: 'center',
          }}
        >
          <View className="pt-2 pb-6" style={{ gap: 12 }}>
            <View
              className="w-full"
              style={[
                isWide
                  ? {
                      flexDirection: 'row',
                      gap: 16,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }
                  : {},
              ]}
            >
              <View
                className="w-full"
                style={
                  isWide
                    ? { flexBasis: '48%', maxWidth: Math.min(560, maxContent * 0.48) }
                    : undefined
                }
              >
                <PreviewSection />
              </View>

              <View
                className="w-full"
                style={
                  isWide
                    ? { flexBasis: '48%', maxWidth: Math.min(560, maxContent * 0.48) }
                    : undefined
                }
              >
                <FiltersSection />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      
      {isWide ? (
        <View className="py-3 items-center">
          <TouchableOpacity
            onPress={exportReport}
            className="rounded-md items-center justify-center"
            style={{
              backgroundColor: Colors.brand.main,
              height: 40, 
              width: '60%', 
              maxWidth: 360,
              borderRadius: 8,
              alignSelf: 'center',
              elevation: 6,
              shadowColor: '#000',
              shadowOpacity: 0.12,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
            }}
            activeOpacity={0.85}
          >
            <Text style={{ color: Colors.outros.branco, fontWeight: '700', fontSize: 14 }}>
              Gerar relatório
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          className="absolute right-5 bottom-5 rounded-full px-3 py-2"
          activeOpacity={0.85}
          onPress={exportReport}
          style={{
            backgroundColor: Colors.brand.main,
            elevation: 6,
            shadowColor: '#000',
            shadowOpacity: 0.12,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
          }}
        >
          <Text className="text-white font-bold" style={{ fontSize: 14 }}>
            Gerar
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}