import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Filtros from "../components/visaogeral/filtros"; 
import Carrosel from "../components/visaogeral/carrosel"; 
import Divisao from "../components/visaogeral/divisao";
import CaixaLotes from "../components/visaogeral/caixa-lotes";
import Cards from "../components/visaogeral/cards";
import Lotes from "../components/visaogeral/lotes";
import Footer from "../components/visaogeral/footer";

const carrosselInfo = [
  { titulo: "Rentabilidade", valor: "R$27.950,18", subtitulo: "Nos últimos 30 dias" },
  { titulo: "Custos", valor: "R$5.718,00", subtitulo: "Aumento de 17%" },
  { titulo: "Animais", valor: "525", subtitulo: "Total no período", animais: 525 }
];

const lotesData = [
  { fazenda: "Fazenda Santa Luzia", numero: 1, animais: 100, area: 15, rentavel: true },
  { fazenda: "Fazenda Santa Luzia", numero: 2, animais: 175, area: 17, rentavel: false },
  { fazenda: "Fazenda Santa Luzia", numero: 3, animais: 250, area: 25, rentavel: false },
];

export default function VisaoGeral() {
  const [filtro, setFiltro] = useState<"Geral" | "Rentáveis" | "Não Rentáveis">("Geral");

  const lotesFiltrados = lotesData.filter((lote) => {
    if (filtro === "Geral") return true;
    if (filtro === "Rentáveis") return lote.rentavel;
    if (filtro === "Não Rentáveis") return !lote.rentavel;
  });

  const rentaveis = lotesData.filter((l) => l.rentavel).length;
  const naoRentaveis = lotesData.length - rentaveis;

  return (
    <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
      {/* <Header /> */}
      
      {/* Carrossel com margem do header */}
      <View style={{ marginVertical: 20 }}>
        <Carrosel data={carrosselInfo} />
      </View>
      
      {/* Linha divisória */}
      <View style={{ marginTop: 10, height: 1, backgroundColor: "#e5e7eb", marginVertical: 8, marginHorizontal: 16 }} />
      
      {/* Filtro fixo fora do ScrollView */}
      <View style={{ backgroundColor: "#f6f6f6" }}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
      </View>
      
      {/* Conteúdo rolável */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        
      >
        <Divisao />
        <View style={{ 
          borderRadius: 16, 
          backgroundColor: "#fff", 
          marginHorizontal: 12, 
          paddingTop: 12, 
          paddingBottom: 8,
          height: 650 // Altura fixa para toda a seção
        }}>
          <CaixaLotes />
          <Cards rentaveis={rentaveis} naoRentaveis={naoRentaveis} />
          
          {/* Container fixo para os lotes com scroll interno */}
          <View style={{ 
            flex: 1, 
            marginHorizontal: 12,
            marginTop: 8
          }}>
            <ScrollView
              showsVerticalScrollIndicator={true}
              nestedScrollEnabled={true}
            >
              <Lotes lotes={lotesFiltrados} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      
      <Footer />
    </View>
  );
}