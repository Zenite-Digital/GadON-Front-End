import { Edit } from "@assets/icons";
import TextInput from "@components/text-input";
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

export default function CadastroPerfil() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha] = useState(false);
  const [imagemPerfil] = useState<any>(
    require("../../assets/images/app-icon.png")
  ); // imagem padrão de perfil
  const [numeroCadPro, setNumeroCadPro] = useState("");
  const [nomePropriedade, setNomePropriedade] = useState("");
  const [areaPropriedade, setAreaPropriedade] = useState("");
  const [qtdAnimais, setQtdAnimais] = useState("");
  const [adicionarPropiedade, setadicionarPropiedade] = useState(false);
  const { width: windowWidth } = useWindowDimensions();

  const imageWidth = (() => {
    let resolution = windowWidth / 3;

    if (resolution > 320) resolution = 320;
    if (resolution < 155) resolution = 155;

    return resolution;
  })();

  return (
    <ScrollView
      className="w-full flex flex-col self-center font-sans py-6 flex-1 bg-white min-w-[320px]"
      contentContainerClassName="flex flex-grow content-center items-center"
    >
      <View className="items-center mb-2 h-fit w-1/2">
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            width: "100%",
            marginBottom: 0,
          }}
          className="max-w-56 max-h-16"
          resizeMode="cover"
        />
      </View>

      <View className="items-center mb-8">
        <Text className="font-bold text-[22px]">Crie sua conta</Text>
        <Text className="text-[#222] text-base mt-1">
          Vamos cadastrar você!
        </Text>
      </View>

      <View className="grid max-w-[400px] justify-items-center flex-grow md:grid-cols-2 sm:max-w-full">
        <View className="items-center my-6 place-self-center max-w-[320px] self-center relative">
          <Image
            source={imagemPerfil}
            className="rounded-full border-[3px] border-[#005E24] bg-white"
            style={{
              maxHeight: 320,
              maxWidth: 320,
              width: windowWidth / 2,
              height: windowWidth / 2,
            }}
            resizeMode="cover"
          />
          <View className="absolute bottom-0 flex w-[70%] self-center flex-row-reverse sm:w-[80%]">
            <TouchableOpacity
              activeOpacity={50}
              className="bg-[#005E24] rounded-full w-16 h-16 items-center justify-center"
            >
              <Edit width={24} height={24} stroke="#fff" fill="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View className=" flex flex-col  w-4/5">
          <View className="gap-3 w-full">
            <TextInput
              value={nome}
              onChangeText={setNome}
              placeholder="Nome Completo"
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="email@exemplo.com"
            />
            <TextInput
              value={senha}
              onChangeText={setSenha}
              placeholder="Senha"
              secureTextEntry={!mostrarSenha}
            />
            <TextInput
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              placeholder="Confirmar senha"
              secureTextEntry={!mostrarSenha}
            />
            <TouchableOpacity
              className="flex flex-row border border-gray-300 rounded-lg p-4 text-base bg-white font-inter-regular"
              onPress={() => setadicionarPropiedade(!adicionarPropiedade)}
              activeOpacity={0.7}
            >
              <Text className="text-[#888] flex-1 text-lg">
                Adicionar Propriedade
              </Text>
              <Text className="text-[#888] text-lg">
                {adicionarPropiedade ? "▲" : "▼"}
              </Text>
            </TouchableOpacity>
            {adicionarPropiedade && (
              <View className="gap-2 mt-2 px-4">
                <TextInput
                  value={numeroCadPro}
                  onChangeText={setNumeroCadPro}
                  placeholder="Número do CadPro"
                  keyboardType="numeric"
                />
                <TextInput
                  value={nomePropriedade}
                  onChangeText={setNomePropriedade}
                  placeholder="Nome da Propriedade"
                />
                <TextInput
                  value={areaPropriedade}
                  onChangeText={setAreaPropriedade}
                  placeholder="Área disponível da propriedade (ha)"
                  keyboardType="numeric"
                />
                <TextInput
                  value={qtdAnimais}
                  onChangeText={setQtdAnimais}
                  placeholder="Quantidade de animais"
                  keyboardType="numeric"
                />
              </View>
            )}
          </View>

          <View className="items-center mt-6 gap-3 w-full">
            <TouchableOpacity
              className="p-3 rounded-lg bg-[#005E24] items-center w-4/5"
              onPress={() => router.replace("/(tabs)")}
            >
              <Text className="text-white font-bold text-base items-center">
                Continuar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-3 rounded-lg bg-[#eee] items-center w-4/5"
              onPress={() => router.replace("/tela-login")}
            >
              <Text className="text-[#888] font-bold text-base">Cancelar</Text>
            </TouchableOpacity>
          </View>

          <Text className="mt-[18px] text-xs px-6 text-[#444] text-center">
            Ao continuar, você concorda com os{" "}
            <Text className="font-bold">Termos de Serviço</Text> e{" "}
            <Text className="font-bold">Política de Privacidade</Text>.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
