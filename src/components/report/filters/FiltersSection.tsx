import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Celeiro from "@assets/icons/Celeiro";
import Propriedades from '../../../constants/mock-data/PropertiesCards';
import Lotes from '../../../constants/mock-data/LotesCards';
import { proprietarios } from '../../../constants/mock-data/FazendaCards';
import { Select } from './Select';

export const FiltersSection: React.FC = () => {
  const [propriedade, setPropriedade] = useState<string | number | null>(null);
  const [lote, setLote] = useState<string | number | null>(null);
  const [proprietario, setProprietario] = useState<string | number | null>(null);

  const propriedadeOptions = useMemo(() => Propriedades.map(p => ({ label: p.nome, value: p.id })), []);
  const loteOptions = useMemo(() => Lotes.map(l => ({ label: l.nome, value: l.id })), []);
  const proprietarioOptions = useMemo(() => proprietarios.map(p => ({ label: p.nome, value: p.id })), []);

  return (
    <View style={[styles.wrapper, { backgroundColor: Colors.brand.neutral }]}>
      <View style={styles.titleRow}>
        <Celeiro 
            iconSize="md"
            style={{ marginRight: 10 }}
          />
        <Text style={[styles.title, { color: Colors.outros.preto }]}>Propriedades</Text>
      </View>

      <View style={styles.field}>
        <Text style={[styles.label, { color: Colors.outros.preto }]}>Propriedade</Text>
        <Select placeholder="Selecione a propriedade" value={propriedade} options={propriedadeOptions} onChange={(opt) => setPropriedade(opt.value)} />
      </View>

      <View style={styles.field}>
        <Text style={[styles.label, { color: Colors.outros.preto }]}>Lote</Text>
        <Select placeholder="Selecione o lote" value={lote} options={loteOptions} onChange={(opt) => setLote(opt.value)} />
      </View>

      <View style={styles.field}>
        <Text style={[styles.label, { color: Colors.outros.preto }]}>Proprietário</Text>
        <Select placeholder="Selecione o proprietário" value={proprietario} options={proprietarioOptions} onChange={(opt) => setProprietario(opt.value)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { borderRadius: 12, padding: 12, gap: 10 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  title: { fontSize: 16, fontWeight: '700' },
  field: { gap: 6 },
  label: { fontSize: 12, opacity: 0.8 },
});