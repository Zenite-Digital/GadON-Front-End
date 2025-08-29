import React, { useMemo, useState } from 'react';
import { Modal, Pressable, View, Text, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { iconSize } from '@assets/icons/constants';
import Propriedades from '../../../constants/mock-data/PropertiesCards';
import Lotes from '../../../constants/mock-data/LotesCards';
import { proprietarios } from '../../../constants/mock-data/FazendaCards';
import { Select } from './Select';

type Props = { visible: boolean; onClose: () => void };

export default function QuickFilterModal({ visible, onClose }: Props) {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? Colors.dark : Colors.light;

  const [propriedade, setPropriedade] = useState<number | string | null>(null);
  const [lote, setLote] = useState<number | string | null>(null);
  const [proprietario, setProprietario] = useState<string | null>(null);

  const propriedadeOptions = useMemo(() => Propriedades.map(p => ({ label: p.nome, value: p.id })), []);
  const loteOptions = useMemo(() => Lotes.map(l => ({ label: l.nome, value: l.id })), []);
  const proprietarioOptions = useMemo(() => proprietarios.map(p => ({ label: p.nome, value: p.id })), []);

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={[styles.sheet, { backgroundColor: Colors.outros.branco }]}>
        <View style={styles.header}>
          <Feather name="filter" size={iconSize.md} color={theme.text} />
          <Text style={[styles.title, { color: theme.text }]}>Filtrar Relatório</Text>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" size={iconSize.md} color={theme.text} />
          </TouchableOpacity>
        </View>

        <View style={{ gap: 10 }}>
          <Select placeholder="Selecione a propriedade" value={propriedade} options={propriedadeOptions} onChange={(o)=>setPropriedade(o.value)} />
          <Select placeholder="Selecione o lote" value={lote} options={loteOptions} onChange={(o)=>setLote(o.value)} />
          <Select placeholder="Selecione o proprietário" value={proprietario} options={proprietarioOptions} onChange={(o)=>setProprietario(String(o.value))} />
          <TouchableOpacity onPress={onClose} style={[styles.applyBtn, { backgroundColor: Colors.brand.main }]}>
            <Text style={{ color: Colors.outros.branco, fontWeight: '600', textAlign: 'center' }}>Aplicar Filtros</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.35)' },
  sheet: { position: 'absolute', top: 84, left: 16, right: 16, borderRadius: 12, padding: 12, gap: 12, elevation: 6, backgroundColor: Colors.outros.branco },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { flex: 1, marginLeft: 8, fontSize: 16, fontWeight: '700' },
  applyBtn: { paddingVertical: 12, borderRadius: 10 },
});