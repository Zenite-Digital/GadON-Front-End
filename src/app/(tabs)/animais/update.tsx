import { ChevronEsquerda } from "@assets/icons";
import Button from "@components/button";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
    View,
    TextInput,
    Alert,
    Switch,
    Text,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Platform,
    Modal,
    FlatList,
    Pressable,
} from "react-native";
import { useState, useEffect } from "react";

type StatusType = "VIVO" | "VENDIDO" | "MORTO";
type SexoType = "M" | "F";

type AnimalData = {
    dataNascimento: string;
    status: StatusType;
    vacinado: boolean;
    sexo: SexoType;
    maeId: string | null;
    atualizadoEm: Date;
};

/* Simple custom dropdown to avoid Picker dependency */
function Dropdown({
    value,
    options,
    placeholder,
    onChange,
}: {
    value: string;
    options: { label: string; value: string }[];
    placeholder?: string;
    onChange: (v: string) => void;
}) {
    const [open, setOpen] = useState(false);

    const displayLabel = options.find((o) => o.value === value)?.label ?? placeholder ?? "Selecionar";

    return (
        <>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                className="bg-slate-50 rounded-lg px-4 py-3 flex-row justify-between items-center"
                accessibilityRole="button"
            >
                <Text className="text-slate-900">{displayLabel}</Text>
                <Text className="text-slate-400">▼</Text>
            </TouchableOpacity>

            <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
                <Pressable
                    className="flex-1 bg-black/40 justify-end"
                    onPress={() => setOpen(false)}
                >
                    <View className="bg-white rounded-t-2xl p-4 max-h-1/2">
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        onChange(item.value);
                                        setOpen(false);
                                    }}
                                    className="py-3"
                                >
                                    <Text className="text-slate-800 text-base">{item.label}</Text>
                                </TouchableOpacity>
                            )}
                            ItemSeparatorComponent={() => <View className="h-px bg-slate-100" />}
                        />
                        <TouchableOpacity
                            onPress={() => setOpen(false)}
                            className="mt-3 py-3 items-center"
                        >
                            <Text className="text-blue-600 font-medium">Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </>
    );
}

export default function UpdateAnimal() {
    const router = useRouter();
    const { animalId } = useLocalSearchParams<{ animalId: string }>();

    const [animal, setAnimal] = useState<AnimalData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!animalId) {
            setError("ID do animal não fornecido.");
            setLoading(false);
            return;
        }

        const fetchAnimalData = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:3000/animals/${animalId}`);
                if (!res.ok) throw new Error("Erro na resposta da API");
                const data = await res.json();

                const dataNascimento = data.dataNascimento
                    ? new Date(data.dataNascimento).toISOString().split("T")[0]
                    : "";

                // normaliza sexo para 'M' | 'F' (aceita backend devolvendo 'M'/'F' ou 'MACHO'/'FEMEA')
                let sexoValue: SexoType = "M";
                if (typeof data.sexo === "string") {
                    const s = data.sexo.toUpperCase();
                    if (s === "M" || s === "MACHO") sexoValue = "M";
                    else if (s === "F" || s === "FEMEA" || s === "FÊMEA") sexoValue = "F";
                }

                setAnimal({
                    dataNascimento,
                    status: (data.status as StatusType) ?? "VIVO",
                    vacinado: Boolean(data.vacinado),
                    sexo: sexoValue,
                    maeId: data.maeId ?? null,
                    atualizadoEm: data.atualizadoEm ?? null,
                });
                setError(null);
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
                setError("Não foi possível carregar os dados do animal.");
                Alert.alert("Erro", "Não foi possível carregar os dados do animal.");
            } finally {
                setLoading(false);
            }
        };

        fetchAnimalData();
    }, [animalId]);

    const handleUpdate = async () => {
        if (!animal || !animalId) return;

        setSaving(true);
        const payload: Partial<AnimalData> = { ...(animal as AnimalData) };
        payload.atualizadoEm = new Date();

        if (payload.maeId === null) {
            delete payload.maeId;
        }

        try {
            const res = await fetch(`http://localhost:3000/animals/${animalId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("Resposta de erro:", text);
                throw new Error("Erro ao atualizar");
            }

            Alert.alert("Sucesso", "Dados do animal atualizados com sucesso!");
            router.push("/animais");
        } catch (err) {
            console.error("Erro ao atualizar:", err);
            Alert.alert("Erro", "Não foi possível atualizar os dados.");
        } finally {
            setSaving(false);
        }
    };

    const handleInputChange = (field: keyof AnimalData, value: string | boolean | null) => {
        if (!animal) return;
        setAnimal((prev) => ({ ...(prev as AnimalData), [field]: value } as AnimalData));
    };

    if (loading) {
        return (
            <View className="flex-1 items-center justify-center bg-slate-50">
                <ActivityIndicator size="large" color="#1e40af" />
                <Text className="mt-3 text-slate-600">Carregando dados...</Text>
            </View>
        );
    }

    return (
        <ScrollView className="flex-1 bg-slate-50 p-6" keyboardShouldPersistTaps="handled">
            <View className="flex-row items-center justify-between mb-8">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="p-2 bg-slate-100 rounded-full"
                    accessibilityLabel="Voltar"
                >
                    <ChevronEsquerda />
                </TouchableOpacity>

                <Text className="text-lg font-semibold text-slate-800">Atualizar Animal</Text>

                <View className="w-10" />
            </View>

            {error ? (
                <View className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
                    <Text className="text-red-700 mb-3">{error}</Text>
                    <Button onPress={() => router.replace(`/animais/update?animalId=${animalId}`)} text="Tentar novamente" />
                </View>
            ) : animal ? (
                <View className="space-y-6">
                    <View>
                        <Text className="text-sm font-medium text-slate-600 mb-2">Data de Nascimento</Text>
                        <TextInput
                            className="bg-slate-100 rounded-lg px-4 py-3 text-slate-900"
                            value={animal.dataNascimento}
                            onChangeText={(t) => handleInputChange("dataNascimento", t)}
                            placeholder="AAAA-MM-DD"
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-slate-600 mb-2">Status</Text>
                        <Dropdown
                            value={animal.status}
                            options={[
                                { label: "VIVO", value: "VIVO" },
                                { label: "VENDIDO", value: "VENDIDO" },
                                { label: "MORTO", value: "MORTO" },
                            ]}
                            onChange={(v) => handleInputChange("status", v as StatusType)}
                        />
                    </View>

                    <View className="flex-row gap-x-6">
                        <View className="flex-1">
                            <Text className="text-sm font-medium text-slate-600 mb-2">Vacinado</Text>
                            <View className="flex-row items-center bg-slate-100 rounded-lg p-3">
                                <Switch
                                    value={animal.vacinado}
                                    onValueChange={(v) => handleInputChange("vacinado", v)}
                                />
                                <Text className="ml-3 text-slate-700">{animal.vacinado ? "Sim" : "Não"}</Text>
                            </View>
                        </View>

                        <View className="flex-1">
                            <Text className="text-sm font-medium text-slate-600 mb-2">Sexo</Text>
                            <Dropdown
                                value={animal.sexo}
                                options={[
                                    { label: "MACHO", value: "M" },
                                    { label: "FEMEA", value: "F" },
                                ]}
                                onChange={(v) => handleInputChange("sexo", v as SexoType)}
                            />
                        </View>
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-slate-600 mb-2">Mãe ID (opcional)</Text>
                        <TextInput
                            className="bg-slate-100 rounded-lg px-4 py-3 text-slate-900"
                            value={animal.maeId ?? ""}
                            onChangeText={(t) => handleInputChange("maeId", t === "" ? null : t)}
                            placeholder="ID da mãe"
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <View className="pt-4 mt-4 border-t border-slate-200">
                        <Button
                            onPress={handleUpdate}
                            text={saving ? "Salvando..." : "Salvar alterações"}
                            disabled={saving}
                            className="w-full"
                        />
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="mt-3 py-3 items-center"
                            accessibilityLabel="Cancelar"
                        >
                            <Text className="text-slate-600 font-medium">Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View className="bg-white rounded-lg p-6 border border-slate-200">
                    <Text className="text-center text-slate-600">Nenhum dado encontrado para exibir.</Text>
                </View>
            )}
        </ScrollView>
    );
}