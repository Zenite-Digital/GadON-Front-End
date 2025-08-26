import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import { SummaryCard } from './SummaryCard';

type Props = { title: string; cards: { value: string; label: string; colorKey?: any }[] };

export default function SummaryGroup({ title, cards }: Props) {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <View style={[styles.wrapper, { backgroundColor: scheme === 'dark' ? Colors.brand.dark : Colors.brand.neutral }]}>
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      <View style={styles.grid}>
        {cards.map((c, i) => (
          <SummaryCard key={i} value={c.value} label={c.label} colorKey={c.colorKey} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { borderRadius: 12, padding: 12, gap: 10 },
  title: { fontSize: 16, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
});