import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, SafeAreaView, Alert } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { styles } from "@components/template-component/styes-lotes";

type Lote = {
  id: number;
  nome: string;
  area: string;
  animais: number;
  imagem: any;
};

const lotes: Lote[] = [
  { id: 1, nome: "Lote 1", area: "15 alq.p", animais: 100, imagem: require("../../assets/images/lotes.png") },
  { id: 2, nome: "Lote 2", area: "15 alq.p", animais: 100, imagem: require("../../assets/images/lotes.png") },
  { id: 3, nome: "Lote 3", area: "15 alq.p", animais: 100, imagem: require("../../assets/images/lotes.png") },
  { id: 4, nome: "Lote 4", area: "15 alq.p", animais: 100, imagem: require("../../assets/images/lotes.png") },
  { id: 5, nome: "Lote 5", area: "15 alq.p", animais: 100, imagem: require("../../assets/images/lotes.png") },
  { id: 6, nome: "Lote 6", area: "15 alq.p", animais: 100, imagem: require("../../assets/images/lotes.png") },
];

export default function LotesScreen() {
    
    const router = useRouter();
    const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderItem = ({ item }: { item: Lote }) => (
    <View style={[styles.card, expanded === item.id && styles.cardExpanded]}>
      <View style={styles.cardHeader}>
        <Image
            source={require("../../assets/images/celeiro.png")} 
            style={{ width: 28, height: 28, marginRight: 10 }}
            resizeMode="contain"
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>{item.nome}</Text>
          <Text style={styles.cardSubtitle}>Área: {item.area} · Animais: {item.animais}</Text>
        </View>
        <TouchableOpacity onPress={() => handleExpand(item.id)}>
          <AntDesign name={expanded === item.id ? "up" : "down"} size={22} color="#333" />
        </TouchableOpacity>
      </View>
      {expanded === item.id && (
        <View style={styles.cardContent}>
          <Image source={item.imagem} style={styles.loteImage} resizeMode="cover" />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => Alert.alert("Editar", "Editar informações do lote")}
          >
            <Feather name="edit" size={18} color="#fff" />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lotes</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Lista */}
      <FlatList
        data={lotes}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.exportButton} onPress={() => Alert.alert("Exportar", "Exportar relatório dos lotes")}>
          <Text style={styles.exportButtonText}>Exportar relatório</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}