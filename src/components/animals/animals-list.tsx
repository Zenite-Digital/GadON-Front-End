import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Modal, TextInput, Platform, Dimensions } from "react-native";
import { Vaca } from "@assets/icons";
import { Animal } from "./animais.entidade";
import Pencil from '@assets/icons/Pencil';
import Colors from '@constants/Colors';
import { styles as loteStyles } from '@components/lotes/styles';

type AnimalListProps = {
  animals: Animal[];
};

export default function AnimalList({ animals }: AnimalListProps) {
  const [editingAnimal, setEditingAnimal] = useState<Animal | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const { width } = Dimensions.get('window');
  const isWeb = Platform.OS === 'web';
  const isDesktop = isWeb && width > 1024;

  // estado temporário do formulário
  const [formState, setFormState] = useState({ id: "", idade: "", sexo: "", lote: "", vacinado: "" });

  const openEdit = (animal: Animal) => {
    setEditingAnimal(animal);
  setFormState({ id: String(animal.id), idade: String(animal.idade), sexo: animal.sexo, lote: animal.lote, vacinado: animal.vacinado ? "sim" : "nao" });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setEditingAnimal(null);
  };

  const handleSave = async () => {
    // chamar função CRUD de update (placeholder)
    try {
      // import dinamico para evitar ciclos
      const crud = await import("@utils/animals.crud");
      await crud.updateAnimal({
        ...editingAnimal,
        id: Number(formState.id),
        idade: Number(formState.idade),
        sexo: formState.sexo as any,
        lote: formState.lote,
        vacinado: formState.vacinado === "sim",
      });
    } catch (err) {
      console.error("Erro ao salvar animal", err);
    }
    closeModal();
  };

  const renderAnimalItem = ({ item }: { item: Animal }) => (
    <View className="bg-white rounded-lg p-4 mb-3 border border-gray-200">
      <View className="flex-row items-center">
        <View className="mr-4">
          <Vaca iconSize="md" stroke="#005E24" />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-inter-medium text-black mb-1">
            Brinco: #{item.brinco}
          </Text>
          <Text className="text-sm font-inter-regular text-gray-600">
            {item.fazenda} - {item.lote}
          </Text>
          <Text className="text-sm font-inter-regular text-gray-600">
            {item.sexo === "macho" ? "Macho" : "Fêmea"} • {item.idade} Anos •{" "}
            {item.vacinado ? "Vacinado" : "Não vacinado"}
          </Text>
        </View>
      </View>

      {/* Botão editar no canto inferior direito do card — ícone apenas */}
      <TouchableOpacity
        onPress={() => openEdit(item)}
        activeOpacity={0.8}
        accessibilityLabel="Editar animal"
        style={{ position: 'absolute', right: 12, bottom: 12 }}
      >
        <Pencil iconSize={isDesktop ? 'md' : 'sm'} stroke={Colors.brand.main} />
      </TouchableOpacity>
    </View>
  );

  if (animals.length === 0) {
    return (
      <View className="flex-1 justify-center items-center py-8">
        <Vaca iconSize="lg" stroke="#ccc" />
        <Text className="text-gray-500 font-inter-regular mt-4 text-center">
          Nenhum animal encontrado{"\n"}com os filtros aplicados
        </Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={animals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAnimalItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Modal de edição */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', padding: 16 }}>
          <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 12 }}>Editar animal</Text>

            <Text className="text-sm font-inter-regular text-gray-700">ID</Text>
            <TextInput value={formState.id} onChangeText={(v) => setFormState(s => ({ ...s, id: v }))} style={{ borderWidth: 1, borderColor: '#e5e7eb', padding: 8, borderRadius: 8, marginBottom: 8 }} />

            <Text className="text-sm font-inter-regular text-gray-700">Idade</Text>
            <TextInput value={formState.idade} onChangeText={(v) => setFormState(s => ({ ...s, idade: v }))} keyboardType="numeric" style={{ borderWidth: 1, borderColor: '#e5e7eb', padding: 8, borderRadius: 8, marginBottom: 8 }} />

            <Text className="text-sm font-inter-regular text-gray-700">Sexo</Text>
            <View style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, marginBottom: 8, padding: 8 }}>
              <Text onPress={() => setFormState(s => ({ ...s, sexo: 'macho' }))} style={{ paddingVertical: 4 }}>Macho</Text>
              <Text onPress={() => setFormState(s => ({ ...s, sexo: 'femea' }))} style={{ paddingVertical: 4 }}>Fêmea</Text>
            </View>

            <Text className="text-sm font-inter-regular text-gray-700">Lote</Text>
            <TextInput value={formState.lote} onChangeText={(v) => setFormState(s => ({ ...s, lote: v }))} style={{ borderWidth: 1, borderColor: '#e5e7eb', padding: 8, borderRadius: 8, marginBottom: 8 }} />

            <Text className="text-sm font-inter-regular text-gray-700">Vacinado</Text>
            <View style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, marginBottom: 12, padding: 8 }}>
              <Text onPress={() => setFormState(s => ({ ...s, vacinado: 'sim' }))} style={{ paddingVertical: 4 }}>Sim</Text>
              <Text onPress={() => setFormState(s => ({ ...s, vacinado: 'nao' }))} style={{ paddingVertical: 4 }}>Não</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={closeModal} style={{ padding: 10, marginRight: 8 }}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave} style={{ padding: 10, backgroundColor: '#065f46', borderRadius: 8 }}>
                <Text style={{ color: '#fff' }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}