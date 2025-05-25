import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TabDashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.alertCard}>
        <Text style={styles.alertText}>Prejuízo</Text>
        <Text style={styles.alertSubText}>Lotes: 2, 3, 5</Text>

        <View style={styles.dotIndicators}>
          {[1, 2, 3, 4, 5].map((dot, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === 0 || index === 1 || index === 4
                  ? styles.activeDot
                  : {},
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.ownerInfo}>
        <Text style={styles.ownerName}>Nome do Proprietário</Text>
        <Text style={styles.cadPro}>CAD-PRO: 123456789</Text>
      </View>

      <View style={styles.propertyTabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Geral</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Ganhos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Gastos</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.indicatorsContainer}
        style={styles.indicators}
      >
        <View style={styles.indicator}>
          <Text style={styles.indicatorLabel}>Rentabilidade</Text>
          <Text style={styles.indicatorValue}>R$45,678.90</Text>
          <Text style={styles.indicatorSubtext}>Nos últimos 30 dias</Text>
        </View>
        <View style={styles.indicator}>
          <Text style={styles.indicatorLabel}>Alqueire</Text>
          <Text style={styles.indicatorValue}>2,405</Text>
          <Text style={styles.indicatorSubtext}>Aumento de 12%</Text>
        </View>
        <View style={styles.indicator}>
          <Text style={styles.indicatorLabel}>Cabeças de Gado</Text>
          <Text style={styles.indicatorValue}>1,400</Text>
          <Text style={styles.indicatorSubtext}>
            Total em todas propriedades
          </Text>
        </View>
        <View style={styles.indicator}>
          <Text style={styles.indicatorLabel}>Lucro Líquido</Text>
          <Text style={styles.indicatorValue}>R$12,345.67</Text>
          <Text style={styles.indicatorSubtext}>Último trimestre</Text>
        </View>
      </ScrollView>

      <View style={styles.chart}>
        <Text style={styles.chartTitle}>Faturamento</Text>
        <View style={styles.chartPlaceholder}>
          <View style={styles.chartYAxis}>
            <Text style={styles.chartAxisText}>$50K</Text>
            <Text style={styles.chartAxisText}>$45K</Text>
            <Text style={styles.chartAxisText}>$40K</Text>
            <Text style={styles.chartAxisText}>$35K</Text>
            <Text style={styles.chartAxisText}>$30K</Text>
          </View>
          <View style={styles.chartDummyLine} />
        </View>
        <View style={styles.chartXAxis}>
          <Text style={styles.chartAxisText}>Nov 23</Text>
          <Text style={styles.chartAxisText}>24</Text>
          <Text style={styles.chartAxisText}>25</Text>
          <Text style={styles.chartAxisText}>26</Text>
          <Text style={styles.chartAxisText}>27</Text>
          <Text style={styles.chartAxisText}>28</Text>
          <Text style={styles.chartAxisText}>29</Text>
          <Text style={styles.chartAxisText}>30</Text>
        </View>
      </View>

      <View style={styles.lotesSection}>
        <Text style={styles.sectionTitle}>Detalhamento por Lote</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.lotesContainer}
        >
          {[1, 2, 3, 4, 5].map((lote) => (
            <View
              key={lote}
              style={[
                styles.loteCard,
                lote === 2 || lote === 3 || lote === 5
                  ? styles.loteCardWarning
                  : {},
              ]}
            >
              <Text style={styles.loteTitle}>Lote {lote}</Text>
              <Text style={styles.loteInfo}>Alqueires: {lote * 150}</Text>
              <Text style={styles.loteInfo}>Animais: {lote * 80}</Text>
              {(lote === 2 || lote === 3 || lote === 5) && (
                <Text style={styles.loteWarning}>Prejuízo</Text>
              )}
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.expenseButton]}>
          <Text style={styles.buttonText}>Adicionar Gastos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.incomeButton]}>
          <Text style={styles.buttonText}>Adicionar Ganho</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  alertCard: {
    backgroundColor: "#2a0000",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  alertText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  alertSubText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  dotIndicators: {
    flexDirection: "row",
    marginTop: 12,
    alignSelf: "center",
  },
  dot: {
    display: "flex",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#555555",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#ffffff",
  },
  ownerInfo: {
    marginBottom: 16,
    padding: 8,
  },
  ownerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cadPro: {
    fontSize: 14,
    color: "#666666",
  },
  propertyTabs: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: "#105d10",
  },
  tabText: {
    fontSize: 14,
  },
  activeTabText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  indicators: {
    marginBottom: 16,
  },
  indicatorsContainer: {
    flexDirection: "row",
  },
  indicator: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eeeeee",
    marginHorizontal: 8,
    width: 150,
  },
  indicatorLabel: {
    fontSize: 14,
    color: "#666",
  },
  indicatorValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 4,
  },
  indicatorSubtext: {
    fontSize: 12,
    color: "#999",
  },
  chart: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  chartPlaceholder: {
    height: 150,
    flexDirection: "row",
    alignItems: "center",
  },
  chartYAxis: {
    width: 40,
    height: "100%",
    justifyContent: "space-between",
  },
  chartAxisText: {
    fontSize: 10,
    color: "#999999",
  },
  chartXAxis: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
  },
  chartDummyLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#4a80f5",
    marginLeft: 8,
    alignSelf: "center",
  },
  lotesSection: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  lotesContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  loteCard: {
    width: 140,
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  loteCardWarning: {
    backgroundColor: "#fff8f8",
    borderColor: "#ffcccc",
  },
  loteTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  loteInfo: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 4,
  },
  loteWarning: {
    fontSize: 14,
    color: "#ff4d4d",
    fontWeight: "bold",
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 24,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  expenseButton: {
    backgroundColor: "#ff4d4d",
  },
  incomeButton: {
    backgroundColor: "#4caf50",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
