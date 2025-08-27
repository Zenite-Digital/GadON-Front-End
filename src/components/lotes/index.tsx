import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "@components/lotes/styles";
import { useRouter } from "expo-router";
import lotes from "@constants/mock-data/LotesCards";
import Celeiro from "@assets/icons/Celeiro"; 
import ChevronBaixo from "@assets/icons/ChevronBaixo";
import ChevronCima from "@assets/icons/ChevronCima";
import Colors from "@constants/Colors";
import ExportButton from "@components/export-button";
import { addAnimalsToDb } from "@utils/animals.crud";

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && width > 1024;
const isTablet = isWeb && width > 768 && width <= 1024;

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

  const handleNavigateToLote = (id: number) => {
    // TODO: Implementar navegação para detalhes do lote
    console.log(`Navegar para lote ${id}`);
    // router.push({ pathname: "/dados-lotes", params: { loteId: id } });
  };

  const handleEdit = (id: number) => {
    // Editar lote
  //   router.push(`/lotes/${id}`);
  };

  const renderItem = ({ item }: { item: Lote }) => (
    <View style={[styles.card, expanded === item.id && styles.cardExpanded]}>
      <View style={styles.cardHeader}>
        <TouchableOpacity 
          onPress={() => handleNavigateToLote(item.id)} 
          style={{ 
            flexDirection: 'row', 
            flex: 1, 
            alignItems: 'center', 
            marginRight: 10
          }}
          activeOpacity={0.7}
        >
          <Celeiro 
            iconSize={isDesktop ? "lg" : "md"} 
            style={{ marginRight: isDesktop ? 16 : 10 }} 
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle} numberOfLines={isWeb ? 3 : 2}>
              {item.nome}
            </Text>
            <Text style={styles.cardSubtitle} numberOfLines={isWeb ? 2 : 1}>
              Área: {item.area} · Animais: {item.animais}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => handleExpand(item.id)}
          style={{
            padding: isDesktop ? 12 : 8,
            borderRadius: 8,
          }}
          activeOpacity={0.6}
        >
          {expanded === item.id ? (
          <ChevronCima 
            width={isDesktop ? 28 : 22} 
            height={isDesktop ? 28 : 22} 
            color={Colors.brand.dark} 
          />
        ) : (
          <ChevronBaixo 
            width={isDesktop ? 28 : 22} 
            height={isDesktop ? 28 : 22} 
            color={Colors.brand.dark} 
          />
        )}
        </TouchableOpacity>
      </View>
      {expanded === item.id && (
        <View style={styles.cardContent}>
          <Image 
            source={item.imagem} 
            style={styles.loteImage} 
            resizeMode="cover" 
          />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEdit(item.id)}
            activeOpacity={0.8}
          >
            <Feather 
              name="edit" 
              size={isDesktop ? 20 : 18} 
              color={Colors.outros.branco} 
            />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>

          {/* ...existing code... */}
        </View>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={lotes}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ 
          padding: isDesktop ? 32 : isTablet ? 24 : 16,
          paddingBottom: isWeb ? (isDesktop ? 120 : 100) : 80,
          maxWidth: isDesktop ? 1200 : '100%',
          alignSelf: 'center',
          width: '100%',
        }}
        showsVerticalScrollIndicator={!isWeb}
        numColumns={isDesktop ? 2 : 1}
        columnWrapperStyle={isDesktop ? { 
          justifyContent: 'space-between',
          paddingHorizontal: 12,
        } : undefined}
        key={isDesktop ? 'desktop' : 'mobile'}
        ItemSeparatorComponent={() => (
          <View style={{ height: isDesktop ? 16 : 12 }} />
        )}
        removeClippedSubviews={!isWeb}
        maxToRenderPerBatch={isDesktop ? 20 : 10}
        windowSize={isDesktop ? 21 : 10}
      />
    </View>
  );
}