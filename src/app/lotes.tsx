// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView, Alert } from "react-native";
// import { AntDesign, Feather } from "@expo/vector-icons"; // Expo ou use react-native-vector-icons
// import styles from "components/styles.ts";

// const lotes = [
//   { id: 1, nome: "Lote 1", area: "15 alq.p", animais: 100, imagem: require("../assets/logo.png") },
//   { id: 2, nome: "Lote 2", area: "15 alq.p", animais: 100, imagem: require("../assets/logo.png") },
//   { id: 3, nome: "Lote 3", area: "15 alq.p", animais: 100, imagem: require("../assets/logo.png") },
//   { id: 4, nome: "Lote 4", area: "15 alq.p", animais: 100, imagem: require("../assets/logo.png") },
//   { id: 5, nome: "Lote 5", area: "15 alq.p", animais: 100, imagem: require("../assets/logo.png") },
//   { id: 6, nome: "Lote 6", area: "15 alq.p", animais: 100, imagem: require("../assets/logo.png") },
// ];

// export default function LotesScreen({ navigation }) {
//   const [expanded, setExpanded] = useState<number | null>(null);
//   });

//   const handleExpand = (id: number) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   const exportarRelatorio = () => {
//     // Aqui você pode integrar com react-native-fs e xlsx para exportar de verdade
//     Alert.alert("Exportar relatório", "Relatório exportado com sucesso (simulado)!");
//   };

//   const renderItem = ({ item }) => (
//     <View style={[styles.card, expanded === item.id && styles.cardExpanded]}>
//       <View style={styles.cardHeader}>
//         <Feather name="home" size={24} color="#00994C" style={{ marginRight: 10 }} />
//         <View style={{ flex: 1 }}>
//           <Text style={styles.cardTitle}>{item.nome}</Text>
//           <Text style={styles.cardSubtitle}>Área: {item.area} · Animais: {item.animais}</Text>
//         </View>
//         <TouchableOpacity onPress={() => handleExpand(item.id)}>
//           <AntDesign name={expanded === item.id ? "up" : "down"} size={22} color="#333" />
//         </TouchableOpacity>
//       </View>
//       {expanded === item.id && (
//         <View style={styles.cardContent}>
//           <Image source={item.imagem} style={styles.loteImage} resizeMode="cover" />
//           <TouchableOpacity
//             style={styles.editButton}
//             onPress={() => Alert.alert("Editar", "Editar informações do lote")}
//           >
//             <Feather name="edit" size={18} color="#fff" />
//             <Text style={styles.editButtonText}>Editar</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <AntDesign name="arrowleft" size={26} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Lotes</Text>
//         <View style={{ width: 26 }} /> {/* Espaço para alinhar */}
//       </View>

//       {/* Lista */}
//       <FlatList
//         data={lotes}
//         keyExtractor={item => item.id.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
//         showsVerticalScrollIndicator={false}
//       />

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.exportButton} onPress={exportarRelatorio}>
//           <Text style={styles.exportButtonText}>Exportar relatório</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );


// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//     justifyContent: "space-between",
//   },
//   headerTitle: {

//     fontSize: 20,
//     textAlign: "center",
//     flex: 1,
//     color: "#222",
//     fontWeight: "bold",
//   },
//   card: {
//     backgroundColor: "#fafafa",
//     borderRadius: 12,
//     marginBottom: 14,
//     borderWidth: 1,
//     borderColor: "#eee",
//     shadowColor: "#000",
//     shadowOpacity: 0.04,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   cardExpanded: {
//     borderColor: "#00994C",
//     shadowOpacity: 0.08,
//   },
//   cardHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//   },
//   cardTitle: {

//     fontSize: 16,
//     color: "#222",
//   },
//   cardSubtitle: {

//     fontSize: 13,
//     color: "#666",
//     marginTop: 2,
//   },
//   cardContent: {
//     padding: 16,
//     paddingTop: 0,
//     position: "relative",
//   },
//   loteImage: {
//     width: "100%",
//     height: 140,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   editButton: {
//     position: "absolute",
//     bottom: 18,
//     right: 18,
//     backgroundColor: "#00994C",
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     elevation: 2,
//   },
//   editButtonText: {
//     color: "#fff",

//     marginLeft: 6,
//     fontSize: 15,
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     borderTopWidth: 1,
//     borderTopColor: "#eee",
//     padding: 16,
//   },
//   exportButton: {
//     backgroundColor: "#00994C",
//     borderRadius: 8,
//     paddingVertical: 14,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   exportButtonText: {
//     color: "#fff",

//     fontSize: 16,
//   },
// });