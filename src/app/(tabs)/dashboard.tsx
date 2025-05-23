import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function TabDashboard() {
    return (
        <ScrollView className="flex-1 bg-white p-4">
            <View className="bg-[#2a0000] p-4 rounded-lg mb-4 flex-col items-end">
                <Text className="text-lg text-white font-bold">Prejuízo</Text>
                <Text className="text-lg text-white font-bold">
                    Lotes: 2, 3, 5
                </Text>

                <View className="flex-row mt-3 self-center">
                    {[1, 2, 3, 4, 5].map((dot, index) => (
                        <View
                            key={index}
                            className={`w-2 h-2 rounded-full mx-1 ${
                                index === 0 || index === 1 || index === 4
                                    ? "bg-white"
                                    : "bg-gray-600"
                            }`}
                        />
                    ))}
                </View>
            </View>

            <View className="mb-4 p-2">
                <Text className="text-lg font-bold">Nome do Proprietário</Text>
                <Text className="text-sm text-gray-600">
                    CAD-PRO: 123456789
                </Text>
            </View>

            <View className="flex-row justify-start mb-4">
                <TouchableOpacity className="py-2 px-4 bg-[#105d10] rounded-full mr-2">
                    <Text className="text-white font-bold">Geral</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-2 px-4 bg-gray-100 rounded-full  mr-2">
                    <Text className="text-sm">Ganhos</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-2 px-4 bg-gray-100 rounded-full  mr-2">
                    <Text className="text-sm">Gastos</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-4"
                contentContainerClassName="flex-row"
            >
                <View className="bg-white p-4 rounded-lg border border-gray-200 mx-2 w-[150px]">
                    <Text className="text-sm text-gray-600">Rentabilidade</Text>
                    <Text className="text-xl font-bold my-1">R$45,678.90</Text>
                    <Text className="text-xs text-gray-400">
                        Nos últimos 30 dias
                    </Text>
                </View>
                <View className="bg-white p-4 rounded-lg border border-gray-200 mx-2 w-[150px]">
                    <Text className="text-sm text-gray-600">Alqueire</Text>
                    <Text className="text-xl font-bold my-1">2,405</Text>
                    <Text className="text-xs text-gray-400">
                        Aumento de 12%
                    </Text>
                </View>
                <View className="bg-white p-4 rounded-lg border border-gray-200 mx-2 w-[150px]">
                    <Text className="text-sm text-gray-600">
                        Cabeças de Gado
                    </Text>
                    <Text className="text-xl font-bold my-1">1,400</Text>
                    <Text className="text-xs text-gray-400">
                        Total em todas propriedades
                    </Text>
                </View>
                <View className="bg-white p-4 rounded-lg border border-gray-200 mx-2 w-[150px]">
                    <Text className="text-sm text-gray-600">Lucro Líquido</Text>
                    <Text className="text-xl font-bold my-1">R$12,345.67</Text>
                    <Text className="text-xs text-gray-400">
                        Último trimestre
                    </Text>
                </View>
            </ScrollView>

            <View className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                <Text className="text-base font-bold mb-4">Faturamento</Text>
                <View className="h-[150px] flex-row items-center">
                    <View className="w-10 h-full justify-between">
                        <Text className="text-xs text-gray-400">$50K</Text>
                        <Text className="text-xs text-gray-400">$45K</Text>
                        <Text className="text-xs text-gray-400">$40K</Text>
                        <Text className="text-xs text-gray-400">$35K</Text>
                        <Text className="text-xs text-gray-400">$30K</Text>
                    </View>
                    <View className="flex-1 h-0.5 bg-blue-500 ml-2 self-center" />
                </View>
                <View className="flex-row justify-between pt-2">
                    <Text className="text-xs text-gray-400">Nov 23</Text>
                    <Text className="text-xs text-gray-400">24</Text>
                    <Text className="text-xs text-gray-400">25</Text>
                    <Text className="text-xs text-gray-400">26</Text>
                    <Text className="text-xs text-gray-400">27</Text>
                    <Text className="text-xs text-gray-400">28</Text>
                    <Text className="text-xs text-gray-400">29</Text>
                    <Text className="text-xs text-gray-400">30</Text>
                </View>
            </View>

            <View className="mt-6 mb-4">
                <Text className="text-base font-bold mb-3">
                    Detalhamento por Lote
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="flex-row mb-4"
                >
                    {[1, 2, 3, 4, 5].map((lote) => (
                        <View
                            key={lote}
                            className={`w-[140px] p-3 rounded-lg mr-3 border ${
                                lote === 2 || lote === 3 || lote === 5
                                    ? "bg-red-50 border-red-200"
                                    : "bg-gray-50 border-gray-200"
                            }`}
                        >
                            <Text className="text-base font-bold mb-2">
                                Lote {lote}
                            </Text>
                            <Text className="text-sm text-gray-600 mb-1">
                                Alqueires: {lote * 150}
                            </Text>
                            <Text className="text-sm text-gray-600 mb-1">
                                Animais: {lote * 80}
                            </Text>
                            {(lote === 2 || lote === 3 || lote === 5) && (
                                <Text className="text-sm text-red-500 font-bold mt-2">
                                    Prejuízo
                                </Text>
                            )}
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View className="flex-row justify-between mt-4 mb-6">
                <TouchableOpacity className="flex-1 p-4 bg-red-600 rounded-lg items-center mx-2">
                    <Text className="text-white text-base font-bold">
                        Adicionar Gastos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 p-4 bg-green-600 rounded-lg items-center mx-2">
                    <Text className="text-white text-base font-bold">
                        Adicionar Ganho
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
