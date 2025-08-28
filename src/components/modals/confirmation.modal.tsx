import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

interface ModalConfirmacaoProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  icon?: React.ReactNode;
}

export default function ModalConfirmacao({
  visible,
  onClose,
  onConfirm,
  title,
  message,
  icon,
}: ModalConfirmacaoProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white p-6 rounded-lg w-80">
          {icon && (<View className="mb-4 flex justify-center items-center self-center h-50 w-50">{icon}</View>)}
          <Text className="text-lg font-bold mb-4 text-center">{title}</Text>
          <Text className="text-base mb-6 text-center">{message}</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              className="bg-gray-300 p-3 rounded flex-1 mr-2"
              onPress={onClose}
            >
              <Text className="text-center font-bold">Não</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-red-500 p-3 rounded flex-1 ml-2"
              onPress={onConfirm}
            >
              <Text className="text-center font-bold text-white">Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}