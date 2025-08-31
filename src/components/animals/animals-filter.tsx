import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    TextInput,
    ScrollView,
} from "react-native";
import { ChevronBaixo } from "@assets/icons";
import Button from "@components/button";

type AnimalFilters = {
    brinco: string;
    sexo: "todos" | "macho" | "femea";
    idadeMin: string;
    idadeMax: string;
    vacinado: "todos" | "sim" | "nao";
};

type AnimalFiltersProps = {
    filters: AnimalFilters;
    onFiltersChange: (filters: AnimalFilters) => void;
};

export default function AnimalFilters({
    filters,
    onFiltersChange,
}: AnimalFiltersProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [tempFilters, setTempFilters] = useState<AnimalFilters>(filters);

    const applyFilters = () => {
        onFiltersChange(tempFilters);
        setModalVisible(false);
    };

    const resetFilters = () => {
        const resetData: AnimalFilters = {
            brinco: "",
            sexo: "todos",
            idadeMin: "",
            idadeMax: "",
            vacinado: "todos",
        };
        setTempFilters(resetData);
        onFiltersChange(resetData);
        setModalVisible(false);
    };

    return (
        <>
            <TouchableOpacity
                className="flex-row items-center justify-between bg-gray-100 p-4 rounded-lg mb-4"
                onPress={() => setModalVisible(true)}
            >
                <Text className="text-base font-inter-regular text-gray-700">
                    Categorizar por:
                </Text>
                <ChevronBaixo iconSize="sm" />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 bg-black/50 justify-end">
                    <View className="bg-white rounded-t-3xl p-6 max-h-4/5">
                        <View className="flex-row justify-between items-center mb-6">
                            <Text className="text-xl font-inter-medium">
                                Filtrar Animais
                            </Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                            >
                                <Text className="text-gray-500 text-lg">✕</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* Filtro por Brinco */}
                            <View className="mb-6">
                                <Text className="text-base font-inter-medium mb-2">
                                    Brinco
                                </Text>
                                <TextInput
                                    className="border border-gray-300 rounded-lg p-3 font-inter-regular"
                                    placeholder="Digite o número do brinco"
                                    value={tempFilters.brinco}
                                    onChangeText={(text) =>
                                        setTempFilters({
                                            ...tempFilters,
                                            brinco: text,
                                        })
                                    }
                                    keyboardType="numeric"
                                />
                            </View>

                            {/* Filtro por Sexo */}
                            <View className="mb-6">
                                <Text className="text-base font-inter-medium mb-2">
                                    Sexo
                                </Text>
                                <View className="flex-row gap-3">
                                    {[
                                        { label: "Todos", value: "todos" },
                                        { label: "Macho", value: "macho" },
                                        { label: "Fêmea", value: "femea" },
                                    ].map((option) => (
                                        <TouchableOpacity
                                            key={option.value}
                                            className={`flex-1 p-3 rounded-lg border ${
                                                tempFilters.sexo ===
                                                option.value
                                                    ? "bg-brand-main border-brand-main"
                                                    : "bg-white border-gray-300"
                                            }`}
                                            onPress={() =>
                                                setTempFilters({
                                                    ...tempFilters,
                                                    sexo: option.value as any,
                                                })
                                            }
                                        >
                                            <Text
                                                className={`text-center font-inter-regular ${
                                                    tempFilters.sexo ===
                                                    option.value
                                                        ? "text-white"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                {option.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>

                            {/* Filtro por Idade */}
                            <View className="mb-6">
                                <Text className="text-base font-inter-medium mb-2">
                                    Idade
                                </Text>
                                <View className="flex-row gap-3 items-center">
                                    <TextInput
                                        className="flex-1 border border-gray-300 rounded-lg p-3 font-inter-regular"
                                        placeholder="De"
                                        value={tempFilters.idadeMin}
                                        onChangeText={(text) =>
                                            setTempFilters({
                                                ...tempFilters,
                                                idadeMin: text,
                                            })
                                        }
                                        keyboardType="numeric"
                                    />
                                    <Text className="text-gray-500">até</Text>
                                    <TextInput
                                        className="flex-1 border border-gray-300 rounded-lg p-3 font-inter-regular"
                                        placeholder="Até"
                                        value={tempFilters.idadeMax}
                                        onChangeText={(text) =>
                                            setTempFilters({
                                                ...tempFilters,
                                                idadeMax: text,
                                            })
                                        }
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>

                            {/* Filtro por Vacinação */}
                            <View className="mb-8">
                                <Text className="text-base font-inter-medium mb-2">
                                    Vacinado
                                </Text>
                                <View className="flex-row gap-3">
                                    {[
                                        { label: "Todos", value: "todos" },
                                        { label: "Sim", value: "sim" },
                                        { label: "Não", value: "nao" },
                                    ].map((option) => (
                                        <TouchableOpacity
                                            key={option.value}
                                            className={`flex-1 p-3 rounded-lg border ${
                                                tempFilters.vacinado ===
                                                option.value
                                                    ? "bg-brand-main border-brand-main"
                                                    : "bg-white border-gray-300"
                                            }`}
                                            onPress={() =>
                                                setTempFilters({
                                                    ...tempFilters,
                                                    vacinado:
                                                        option.value as any,
                                                })
                                            }
                                        >
                                            <Text
                                                className={`text-center font-inter-regular ${
                                                    tempFilters.vacinado ===
                                                    option.value
                                                        ? "text-white"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                {option.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </ScrollView>

                        <View className="flex-row gap-3 pt-4 border-t border-gray-200">
                            <Button
                                text="Limpar"
                                variant="outline"
                                color="secondary"
                                fullWidth
                                onPress={resetFilters}
                            />
                            <Button
                                text="Aplicar"
                                variant="solid"
                                color="main"
                                fullWidth
                                onPress={applyFilters}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}
