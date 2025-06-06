import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const GAP = 8;
const PADDING = 16;
const CARD_WIDTH = width * 0.85; 

const lotes = [
  {
    fazenda: "Fazenda Santa Luzia",
    numero: 1,
    animais: 100,
    area: 15,
    rentavel: true,
  },
  {
    fazenda: "Fazenda Santa Luzia",
    numero: 2,
    animais: 175,
    area: 17,
    rentavel: false,
  },
  {
    fazenda: "Fazenda Santa Luzia",
    numero: 3,
    animais: 250,
    area: 25,
    rentavel: false,
  },
  // Adicione mais lotes conforme necessário
];

export default function VisaoGeral() {
  const [filtro, setFiltro] = useState<"Geral" | "Rentáveis" | "Não Rentáveis">("Geral");

  const lotesFiltrados = lotes.filter((lote) => {
    if (filtro === "Geral") return true;
    if (filtro === "Rentáveis") return lote.rentavel;
    if (filtro === "Não Rentáveis") return !lote.rentavel;
  });

  const rentaveis = lotes.filter((l) => l.rentavel).length;
  const naoRentaveis = lotes.length - rentaveis;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Visão Geral</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselRow}
        >
          <View style={styles.card}>
            <Text style={styles.cardLabel}>Rentabilidade</Text>
            <Text style={styles.cardValue}>R$27.950,18</Text>
            <Text style={styles.cardSub}>Nos últimos 30 dias</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>Custos</Text>
            <Text style={styles.cardValue}>R$5.718,00</Text>
            <Text style={styles.cardSub}>Aumento de 17%</Text>
          </View>
        </ScrollView>
        <View style={styles.tabsRow}>
          {["Geral", "Rentáveis", "Não Rentáveis"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setFiltro(tab as any)}
              style={[
                styles.tabButton,
                filtro === tab && styles.tabButtonActive,
              ]}
            >
              <Text style={[
                styles.tabButtonText,
                filtro === tab && styles.tabButtonTextActive,
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.statusRow}>
          <Text style={styles.statusRentavel}>Rentáveis: {rentaveis}</Text>
          <Text style={styles.statusNaoRentavel}>Não Rentáveis: {naoRentaveis}</Text>
        </View>
        <View>
          {lotesFiltrados.map((lote, idx) => (
            <View key={idx} style={styles.loteCard}>
              <Text style={styles.loteIcon}>🏡</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.loteFazenda}>{lote.fazenda}</Text>
                <Text style={styles.loteNumero}>Lote: {lote.numero}</Text>
                <Text style={styles.loteInfo}>
                  Animais: {lote.animais} · Área: {lote.area} alq.p ·{" "}
                  <Text style={{ color: lote.rentavel ? "#006d3c" : "#b91c1c" }}>
                    {lote.rentavel ? "Rentável" : "Não Rentável"}
                  </Text>
                </Text>
              </View>
              <View style={[
                styles.statusDot,
                { backgroundColor: lote.rentavel ? "#22c55e" : "#ef4444" }
              ]} />
            </View>
          ))}
        </View>
        {/* Espaço extra para o botão não sobrepor conteúdo */}
        <View style={{ height: 80 }} />
      </ScrollView>
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.exportButton}>
          <Text style={styles.exportButtonText}>Exportar relatório</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "stretch",
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  carouselRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
    paddingRight: 8,

  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#f6f6f6",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    elevation: 2,
    maxHeight: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    marginRight: 8,
  },
  cardLabel: {
    fontSize: 12,
    color: "#888",
  },
  cardValue: {
    fontWeight: "bold",
    fontSize: 22,
  },
  cardSub: {
    fontSize: 12,
    color: "#888",
  },
  tabsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  tabButton: {
    flex: 1,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "#006d3c",
  },
  tabButtonText: {
    color: "#222",
    fontWeight: "normal",
  },
  tabButtonTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  statusRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  statusRentavel: {
    backgroundColor: "#e6f4ea",
    color: "#006d3c",
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 12,
    overflow: "hidden",
  },
  statusNaoRentavel: {
    backgroundColor: "#fde7e7",
    color: "#b91c1c",
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 12,
    overflow: "hidden",
  },
  loteCard: {
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  loteIcon: {
    fontSize: 22,
    marginRight: 8,
  },
  loteFazenda: {
    fontWeight: "bold",
  },
  loteNumero: {
    fontSize: 14,
  },
  loteInfo: {
    fontSize: 12,
    color: "#666",
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginLeft: 8,
  },
  fixedButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  exportButton: {
    width: "100%",
    backgroundColor: "#006d3c",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  exportButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});