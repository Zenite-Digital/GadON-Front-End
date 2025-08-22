import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  const { width: windowWidth } = useWindowDimensions();
  const isDesktop = windowWidth > 1150;

  const handleContinue = () => {
    // Simular verificação se usuário existe (em produção seria uma API)
    const userExists = email.includes("@"); // Simulação simples

    if (isExistingUser && userExists) {
      // Se já mostrou campo de senha e usuário existe, vai para tabs
      router.replace("/(tabs)");
    } else if (userExists && !isExistingUser) {
      // Se usuário existe mas ainda não mostrou senha, mostra campo de senha
      setIsExistingUser(true);
    } else {
      // Se usuário não existe, redireciona para cadastro
      router.push("/cadastro-perfil");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
    router.replace("/(tabs)");
  };

  const handleAppleLogin = () => {
    console.log("Login com Apple");
    router.replace("/(tabs)");
  };

  const openPrivacyPolicy = () => {
    Linking.openURL(
      "https://zenite-digital.github.io/LandingPage/src/politica.html"
    );
  };

  const logoDimensions = isDesktop
    ? { width: windowWidth / 2, height: 240 }
    : { width: 360, height: 120 };

  return (
    <ScrollView
      className="flex-1 bg-white px-6 font-inter-regular"
      horizontal={isDesktop}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-evenly",
      }}
    >
      <View className="items-center justify-center mb-10 pt-20">
        <Image
          source={require("../../assets/images/logo.png")}
          style={logoDimensions}
          resizeMode="contain"
        />
      </View>

      <View className="max-w-96 self-center">
        <View className="items-center mb-8">
          <Text className="text-2xl font-bold text-black mb-2 font-inter-medium text-center">
            Crie sua conta
          </Text>
          <Text className="text-base text-black font-inter-regular text-center">
            Ou entre com seu e-mail
          </Text>
        </View>

        <View className="mb-8">
          <TextInput
            className="border border-gray-300 rounded-lg p-4 text-base bg-white mb-4 font-inter-regular"
            placeholder="email@exemplo.com"
            placeholderTextColor="#828282"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {isExistingUser && (
            <View className="relative mb-4">
              <TextInput
                className="border border-gray-300 rounded-lg p-4 pr-12 text-base bg-white font-inter-regular"
                placeholder="Senha"
                placeholderTextColor="#828282"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />

              <TouchableOpacity
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#828282"
                />
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            className="bg-brand-main rounded-lg p-4 items-center"
            onPress={handleContinue}
          >
            <Text
              className="font-bold text-base font-inter-medium"
              style={{ color: "#F3F3ED" }}
            >
              Continuar
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-slate-600 text-sm font-inter-regular">
            ou
          </Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        <View className="mb-8">
          <TouchableOpacity
            className="flex-row items-center justify-center bg-white border border-gray-300 rounded-lg p-4 mb-3"
            onPress={handleGoogleLogin}
          >
            <Ionicons name="logo-google" size={20} color="#4285F4" />
            <Text className="ml-3 text-base text-black font-inter-regular">
              Continue com Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-center bg-white border border-gray-300 rounded-lg p-4"
            onPress={handleAppleLogin}
          >
            <Ionicons name="logo-apple" size={20} color="#000" />
            <Text className="ml-3 text-base text-black font-inter-regular">
              Continue com Apple
            </Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mb-10">
          <Text className="text-center text-xs leading-5 font-inter-regular">
            <Text style={{ color: "#828282" }}>
              Ao continuar, você concorda com os{" "}
            </Text>
            <Text
              className="text-black underline font-inter-regular"
              style={{ color: "#000000" }}
              onPress={openPrivacyPolicy}
            >
              Termos de Serviço e Política de Privacidade
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
