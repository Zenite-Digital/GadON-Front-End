import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';

type ColorKey = 'primary' | 'success' | 'danger' | 'info' | 'brand';

type Props = {
  value: string;
  label: string;
  colorKey?: ColorKey;
};

const getTokenColor = (key: ColorKey) => {
  switch (key) {
    case 'success': return Colors.estados.normal.success;
    case 'danger':  return Colors.estados.normal.danger;
    case 'info':    return Colors.estados.normal.info;
    case 'brand':   return Colors.brand.main;
    default:        return Colors.estados.normal.primary;
  }
};

const getBgSoft = (key: ColorKey) => {
  switch (key) {
    case 'success': return Colors.estados.outline.success;
    case 'danger':  return Colors.estados.outline.danger;
    case 'info':    return Colors.estados.outline.info;
    case 'brand':   return Colors.brand.secondary;
    default:        return Colors.estados.outline.primary;
  }
};

export const SummaryCard: React.FC<Props> = ({ value, label, colorKey = 'primary' }) => {
  const mainColor = getTokenColor(colorKey);
  const softBg = getBgSoft(colorKey);

  return (
    <View style={[styles.card, { backgroundColor: softBg, borderColor: mainColor + '33' }]}>
      <Text style={[styles.value, { color: mainColor }]}>{value}</Text>
      <Text style={[styles.label, { color: Colors.outros.preto }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '48%',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    gap: 6,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
  },
  label: {
    fontSize: 12,
    opacity: 0.8,
  },
});