import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "@components/lotes/styles";
import { useRouter } from "expo-router";
import lotes from "@constants/mock-data/LotesCards";
import Celeiro from "@assets/icons/Celeiro"; 
import ChevronBaixo from "@assets/icons/ChevronBaixo";
import ChevronCima from "@assets/icons/ChevronCima";

type Lote = {
  id: number;
  nome: string;
  area: string;
  animais: number;
  imagem: any;
};

export default function LotesList() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const router = useRouter();

  const handleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleEdit = (id: number) => {
    // Editar lote
  //   router.push(`/lotes/${id}`);
  };

  const renderItem = ({ item }: { item: Lote }) => (
    <View style={[styles.card, expanded === item.id && styles.cardExpanded]}>
      <View style={styles.cardHeader}>
        <Celeiro iconSize="md"  style={{ marginRight: 10 }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>{item.nome}</Text>
          <Text style={styles.cardSubtitle}>Área: {item.area} · Animais: {item.animais}</Text>
        </View>
        <TouchableOpacity onPress={() => handleExpand(item.id)}>
          {expanded === item.id ? (
          <ChevronCima width={22} height={22} color="#333" />
        ) : (
          <ChevronBaixo width={22} height={22} color="#333" />
        )}
        </TouchableOpacity>
      </View>
      {expanded === item.id && (
        <View style={styles.cardContent}>
          <Image source={item.imagem} style={styles.loteImage} resizeMode="cover" />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEdit(item.id)}
          >
            <Feather name="edit" size={18} color="#fff" />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={lotes}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}
    />
  );
}