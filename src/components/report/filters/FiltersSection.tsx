import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Celeiro from "@assets/icons/Celeiro";
// import { Select } from "./Select";
import { useQuery } from "@tanstack/react-query";
import { findAllFazendas } from "src/services/fazendas.api";
import { useIsFocused } from "@react-navigation/native";
import { findAllLotesByFazendaId } from "src/services/lotes.api";
import { Select } from "@components/select";

export const FiltersSection: React.FC = () => {
  const isFocused = useIsFocused();
  const [propriedade, setPropriedade] = useState<string | null>(null);
  const [lote, setLote] = useState<string | null>(null);
  // const [proprietario, setProprietario] = useState<string | number | null>(
  //   null
  // );

  const { data: propriedadesData } = useQuery({
    queryKey: ["properties", "component"],
    queryFn: findAllFazendas,
    subscribed: isFocused,
  });

  const { data: lotesData } = useQuery({
    queryKey: ["properties", "lotes", propriedade],
    queryFn: () => findAllLotesByFazendaId(propriedade!),
    subscribed: isFocused,
    enabled: propriedade !== undefined,
  });

  const propriedadeOptions = useMemo(
    () => propriedadesData?.map((p) => ({ label: p.nome, value: p.id })),
    [propriedadesData]
  );
  const loteOptions = useMemo(
    () => lotesData?.map((l) => ({ label: l.nome, value: l.id })),
    [lotesData]
  );
  // const proprietarioOptions = useMemo(
  //   () => proprietarios.map((p) => ({ label: p.nome, value: p.id })),
  //   []
  // );

  return (
    <View style={[styles.wrapper, { backgroundColor: Colors.brand.neutral }]}>
      <View style={styles.titleRow}>
        <Celeiro iconSize="md" style={{ marginRight: 10 }} />
        <Text style={[styles.title, { color: Colors.outros.preto }]}>
          Propriedades
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={[styles.label, { color: Colors.outros.preto }]}>
          Propriedade
        </Text>
        <Select
          placeholder="Selecione a propriedade"
          value={propriedade ?? undefined}
          options={propriedadeOptions ?? []}
          onChange={(opt) => setPropriedade(opt)}
        />
      </View>

      <View style={styles.field}>
        <Text style={[styles.label, { color: Colors.outros.preto }]}>Lote</Text>
        <Select
          placeholder="Selecione o lote"
          value={lote || undefined}
          options={loteOptions ?? []}
          onChange={(opt) => setLote(opt)}
        />
      </View>

      {/* <View style={styles.field}>
        <Text style={[styles.label, { color: Colors.outros.preto }]}>
          Proprietário
        </Text>
        <Select
          placeholder="Selecione o proprietário"
          value={proprietario || undefined}
          options={proprietarioOptions ?? []}
          onChange={(opt) => setProprietario(opt)}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { borderRadius: 12, padding: 12, gap: 10 },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  title: { fontSize: 16, fontWeight: "700" },
  field: { gap: 6 },
  label: { fontSize: 12, opacity: 0.8 },
});
