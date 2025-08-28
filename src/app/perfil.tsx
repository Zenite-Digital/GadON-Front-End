import { Edit } from "@assets/icons";
import Button from "@components/button";
import ModalConfirmacao from "@components/modals/confirmation.modal"; // Adicione esta importação
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";

export default function Perfil() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const buttonStyle = "flex flex-row-reverse justify-center gap-10 items-center self-center w-full p-4 font-bold min-w-[350px] hover:bg-gray-200";

  return (
    <ScrollView
      className="w-full flex flex-col self-center font-sans py-6 flex-1 bg-white"
      contentContainerClassName="flex flex-grow content-center items-center"
      style={{ maxWidth: 500 }}
    >


      <View className="grid max-w-[400px] justify-items-center flex-grow">
        <View className="items-center my-6 place-self-center max-w-[320px] self-center relative">
          <Image
            source={{
              uri: `https://ui-avatars.com/api/?name=${encodeURIComponent(
                nome || "Usuario"
              )}&size=256&background=ffffff&color=005E24`,
            }}
            className="rounded-full border-[3px] border-[#005E24] bg-white w-32 h-32 md:w-40 md:h-40 max-w-40 max-h-40"
            resizeMode="cover"
          />
          <View className="absolute bottom-0 flex w-[40%] self-center flex-row-reverse lg:w-[90%]">
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-[#005E24] rounded-full w-10 h-10 items-center justify-center"
            >
              <Edit width={24} height={24} stroke="#fff" fill="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex justify-center items-center">
          <Text className="font-bold text-lg">{nome || "Usuario"}</Text>
          <Text className="text-gray-500">{status || "Status Desconhecido"}</Text>
        </View>

        <View className="flex flex-col w-full px-4">

          <View className="flex mt-6 gap-5 w-full flex-grow">

            <Button
              className={buttonStyle}
              variant="solid"
              color="light"
              text="Meus Dados"
              
            />

            <Button
              className={buttonStyle}
              variant="solid"
              color="light"
              text="Configurações"
            />

            <Button
              className={buttonStyle}
              variant="solid"
              color="light"
              text="Notificações  "
            />

            <Button
              className={buttonStyle}
              variant="solid"
              color="light"
              text="Privacidade"
            />

            <Button
              className={buttonStyle}
              variant="solid"
              color="light"
              text="Termos de Uso"
            />

            <Button
              className={buttonStyle}
              variant="solid"
              color="light"
              text="Ajuda"
            />

            <View className="flex lg:mt-8 mt-20 w-full justify-center items-center self-center">

              <Button
                className="flex flex-row-reverse justify-center gap-10 items-center self-center w-full mt-20 p-4 font-bold min-w-[250px] hover:bg-red-700" // Hover mais escuro para danger
                variant="solid"
                color="danger"
                onPress={() => setModalVisible(true)} // Abre a modal ao invés de sair diretamente
                text="Sair"
              />
            </View>

          </View>
        </View>
      </View>

      <ModalConfirmacao
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={() => {
          setModalVisible(false);
          router.push("/tela-login");
        }}
        title="Deseja sair?"
        message="Tem certeza de que deseja sair? Sua conta será desconectada."
      />
    </ScrollView>
  );
}
