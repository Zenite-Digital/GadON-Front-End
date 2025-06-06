import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router"; // Importar o router para navegação

export default function LoginScreen() {
    const router = useRouter(); // Inicializar o router
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isExistingUser, setIsExistingUser] = useState(false);

    const handleContinue = () => {
        // Se for existente, vai pra tela inicial, senão mostra campo de senha
        if (isExistingUser) {
            router.replace("/(tabs)"); // Navega para a tab index
        } else {
            setIsExistingUser(true);
        }
    };

    const handleGoogleLogin = () => {
        console.log("Login com Google");
        router.replace("/(tabs)"); // Após login, navega para a tab index
    };

    const handleAppleLogin = () => {
        console.log("Login com Apple");
        router.replace("/(tabs)"); // Após login, navega para a tab index
    };

    const openPrivacyPolicy = () => {
        Linking.openURL("https://zenite-digital.github.io/LandingPage/src/politica.html");
    };

    return (
        <ScrollView className="flex-1 bg-white px-6 justify-center">
            <View className="items-center mb-10 pt-20">
                <Text className="text-5xl font-bold text-black">GadON</Text>
            </View>

            <View className="items-center mb-8">
                <Text className="text-2xl font-bold text-black mb-2">
                    Crie sua conta
                </Text>
                <Text className="text-base text-black">
                    Ou entre com seu email
                </Text>
            </View>

            <View className="mb-8">
                <TextInput
                    className="border border-gray-300 rounded-lg p-4 text-base bg-white mb-4"
                    placeholder="Digite seu email"
                    placeholderTextColor="#828282"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                {isExistingUser && (
                    <View className="relative mb-4">
                        <TextInput
                            className="border border-gray-300 rounded-lg p-4 pr-12 text-base bg-white"
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
                    <Text className="text-white text-base font-bold">
                        Continuar
                    </Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center mb-6">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-4 text-slate-600 text-sm">ou</Text>
                <View className="flex-1 h-px bg-gray-300" />
            </View>

            <View className="mb-8">
                <TouchableOpacity
                    className="flex-row items-center justify-center bg-white border border-gray-300 rounded-lg p-4 mb-3"
                    onPress={handleGoogleLogin}
                >
                    <Ionicons name="logo-google" size={20} color="#4285F4" />
                    <Text className="ml-3 text-base text-black">
                        Continue com Google
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex-row items-center justify-center bg-white border border-gray-300 rounded-lg p-4"
                    onPress={handleAppleLogin}
                >
                    <Ionicons name="logo-apple" size={20} color="#000" />
                    <Text className="ml-3 text-base text-black">
                        Continue com Apple
                    </Text>
                </TouchableOpacity>
            </View>

            <View className="items-center mb-10">
                <Text className="text-center text-xs text-gray-500 leading-5">
                    Ao continuar, você concorda com os{" "}
                    <Text
                        className="text-black underline"
                        onPress={openPrivacyPolicy}
                    >
                        Termos de Serviço e Política de Privacidade
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
}
