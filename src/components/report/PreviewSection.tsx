import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { iconSize } from '@assets/icons/constants';

import Fazendas from '../../constants/mock-data/FazendaCards';
import { SummaryCard } from './SummaryCard';

export const PreviewSection: React.FC = () => {
  const [expanded, setExpanded] = useState(true);

  const totals = useMemo(() => {
    const totalAnimais = Fazendas.reduce((acc, f) => acc + (f.animais ?? 0), 0);
    const totalLotes = Fazendas.length;
    const lucro = Fazendas.filter(f => f.rentavel).reduce((acc, f) => acc + (f.receitaEstimada ?? 0), 0);
    const preju = Fazendas.filter(f => !f.rentavel).reduce((acc, f) => acc + (f.receitaEstimada ?? 0), 0);
    const money = (v: number) => (v >= 1000 ? `R$ ${Math.round(v / 1000)}K` : `R$ ${v.toFixed(0)}`);
    return { lucro: money(lucro), preju: money(preju), animais: String(totalAnimais), lotes: String(totalLotes) };
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: Colors.brand.neutral }]}>
      <TouchableOpacity style={styles.header} onPress={() => setExpanded(v => !v)}>
        <View style={styles.headerLeft}>
          <Feather name="eye" size={iconSize.sm} color={Colors.outros.preto} />
          <Text style={[styles.headerTitle, { color: Colors.outros.preto }]}>Prévia dos Dados</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={{ color: Colors.outros.preto, marginRight: 6 }}>{expanded ? 'Ocultar' : 'Mostrar'}</Text>
          <Feather name={expanded ? 'chevron-up' : 'chevron-down'} size={iconSize.md} color={Colors.outros.preto} />
        </View>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.grid}>
          <SummaryCard value={totals.lucro} label="Lucro Total" colorKey="success" />
          <SummaryCard value={totals.preju} label="Prejuízo Total" colorKey="danger" />
          <SummaryCard value={totals.animais} label="Total de Animais" colorKey="info" />
          <SummaryCard value={totals.lotes} label="Total de Lotes" colorKey="primary" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { borderRadius: 12, padding: 12, marginBottom: 12 },
  header: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerTitle: { fontSize: 16, fontWeight: '700' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  grid: { paddingTop: 10, flexDirection: 'row', gap: 10, flexWrap: 'wrap' },
});