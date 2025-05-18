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
            <View style={styles.header}>
                <Text style={styles.title}>Finanças</Text>
            </View>

            <View style={styles.alertCard}>
                <Text style={styles.alertText}>Prejuízo</Text>
                <Text style={styles.alertSubText}>Lote 1</Text>
            </View>

            <View style={styles.propertyTabs}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Propriedade 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Propriedade 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Propriedade 3</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.indicatorsContainer}
                style={styles.indicators}
            >
                <View style={styles.indicator}>
                    <Text style={styles.indicatorValue}>$45,678.90</Text>
                    <Text style={styles.indicatorLabel}>Rentabilidade</Text>
                </View>
                <View style={styles.indicator}>
                    <Text style={styles.indicatorValue}>2,405</Text>
                    <Text style={styles.indicatorLabel}>Alqueire</Text>
                </View>
                <View style={styles.indicator}>
                    <Text style={styles.indicatorValue}>1,400</Text>
                    <Text style={styles.indicatorLabel}>Cabeças de Gado</Text>
                </View>
                <View style={styles.indicator}>
                    <Text style={styles.indicatorValue}>$12,345.67</Text>
                    <Text style={styles.indicatorLabel}>Lucro Líquido</Text>
                </View>
            </ScrollView>

            <View style={styles.chart}>
                <Text style={styles.chartTitle}>Faturamento</Text>
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
        backgroundColor: "#ffcccc",
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    alertText: {
        fontSize: 18,
        color: "#ff0000",
        fontWeight: "bold",
    },
    alertSubText: {
        fontSize: 16,
        color: "#ff0000",
    },
    propertyTabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    tab: {
        padding: 8,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
    },
    tabText: {
        fontSize: 14,
    },
    indicators: {
        marginBottom: 16,
    },
    indicatorsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    indicator: {
        backgroundColor: "#eeeeee",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 8,
        width: 150,
    },
    indicatorValue: {
        fontSize: 20,
        fontWeight: "bold",
    },
    indicatorLabel: {
        fontSize: 14,
        color: "#666",
    },
    chart: {
        marginTop: 16,
    },
    chartTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
});
