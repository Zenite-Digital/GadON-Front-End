import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView, StyleSheet, SafeAreaView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const filtros = ["Geral", "Brinco", "Sexo", "Idade", "Vacinado"];

const animais = [
  { id: "1258", sexo: "Macho", idade: "2 Anos", vacinado: true },
  { id: "1952", sexo: "Macho", idade: "2 Anos", vacinado: false },
  { id: "3375", sexo: "Macho", idade: "2 Anos", vacinado: true },
  { id: "2531", sexo: "Fêmea", idade: "2 Anos", vacinado: true },
  { id: "6981", sexo: "Fêmea", idade: "2 Anos", vacinado: true },
  { id: "6969", sexo: "Macho", idade: "2 Anos", vacinado: true },
];

export default function DadosLotesScreen() {
  const [filtroAtivo, setFiltroAtivo] = useState("Geral");
  const [busca, setBusca] = useState("");

  
  
  function filtrarAnimais() {
    let lista = animais;

    if (busca) {
      lista = lista.filter(animal => animal.id.includes(busca));
    }

    switch (filtroAtivo) {
      case "Sexo":
        lista = [...lista].sort((a, b) => a.sexo.localeCompare(b.sexo));
        break;
      case "Idade":
        lista = [...lista].sort((a, b) => a.idade.localeCompare(b.idade));
        break;
      case "Vacinado":
        lista = [...lista].sort((a, b) => Number(b.vacinado) - Number(a.vacinado));
        break;
      case "Brinco":
        lista = [...lista].sort((a, b) => Number(a.id) - Number(b.id));
        break;
      default:
        break;
    }
    return lista;
  }

  const animaisFiltrados = filtrarAnimais();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lote 1</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }}>
        {/* Card Fazenda */}
        <View style={styles.cardFazenda}>
          <Text style={styles.fazendaTitle}>Fazenda Santa Luzia</Text>
          <Text style={styles.fazendaSub}>Categorizar por:</Text>
        </View>

        {/* Filtros */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
          {filtros.map(filtro => (
            <TouchableOpacity
              key={filtro}
              style={[
                styles.filtroBtn,
                filtroAtivo === filtro && styles.filtroBtnAtivo
              ]}
              onPress={() => setFiltroAtivo(filtro)}
            >
              <Text style={[
                styles.filtroBtnText,
                filtroAtivo === filtro && styles.filtroBtnTextAtivo
              ]}>
                {filtro}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Busca */}
        <View style={styles.buscaContainer}>
          <AntDesign name="search1" size={18} color="#888" style={{ marginLeft: 8 }} />
          <TextInput
            placeholder="Buscar"
            value={busca}
            onChangeText={setBusca}
            style={styles.inputBusca}
            placeholderTextColor="#888"
          />
        </View>

        {/* Lista de animais */}
        <FlatList
          data={animaisFiltrados}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.animalCard}>
                <Image
                    source={require("../../assets/images/cow.png")} 
                    style={{ width: 28, height: 28, marginRight: 10 }}
                    resizeMode="contain"
                />
              <View>
                <Text style={styles.animalTitle}>Brinco: #{item.id}</Text>
                <Text style={styles.animalSub}>
                  {item.sexo} · {item.idade} · {item.vacinado ? "Vacinado" : "Não Vacinado"}
                </Text>
              </View>
            </View>
          )}
          style={{ marginTop: 10 }}
          scrollEnabled={false}
        />
      </ScrollView>

      {/* Botão exportar */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.exportarBtn}>
          <Text style={styles.exportarBtnText}>Exportar relatório</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    backgroundColor: "#fff"
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#222"
  },
  cardFazenda: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10
  },
  fazendaTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222"
  },
  fazendaSub: {
    color: "#888",
    fontSize: 13,
    marginTop: 2
  },
  filtroBtn: {
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0"
  },
  filtroBtnAtivo: {
    backgroundColor: "#156D3A",
    borderColor: "#156D3A"
  },
  filtroBtnText: {
    color: "#222",
    fontWeight: "bold"
  },
  filtroBtnTextAtivo: {
    color: "#fff"
  },
  buscaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    marginBottom: 10,
    height: 40
  },
  inputBusca: {
    flex: 1,
    fontSize: 15,
    marginLeft: 8,
    color: "#222"
  },
  animalCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10
  },
  animalTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222"
  },
  animalSub: {
    color: "#888",
    fontSize: 13,
    marginTop: 2
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff"
  },
  exportarBtn: {
    backgroundColor: "#156D3A",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center"
  },
  exportarBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});