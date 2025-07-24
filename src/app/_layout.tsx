import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import "../../global.css";
import { useGlobalProps } from "@hooks/useGlobalProps";

export {
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "tela-login",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    InterRegular: require("@assets/fonts/Inter-Regular.otf"),
    InterMedium: require("@assets/fonts/Inter-Medium.otf"),
    ...FontAwesome.font,
  });

  useGlobalProps();

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} redirect={true} />
        <Stack.Screen name="tela-login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="cadastro-perfil" 
          options={{ 
            title: 'Cadastro',
            headerShown: true, 
            headerTitleAlign: 'center', 
            headerStyle: {
            borderBottomColor: '#005E24', 
            },
          }} />

        <Stack.Screen 
          name="tela-propriedade" 
          
          options={{ title: 'Minha propriedade', 
            headerTitleAlign: 'center', 
            headerRight: () => (
              <FontAwesome 
                name="gear" 
                size={24} 
                color="#000" 
                className="p-2 mr-2"
                onPress={() => console.log('Menu pressed')} // Replace with your navigation logic
              />
            ),
            headerStyle: {
            borderBottomColor: '#005E24', 
            
            },
          }} />

        <Stack.Screen 
          name="visao-geral" 
          options={{ 
            title: 'Visão Geral',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
              borderBottomWidth: 1,
              borderBottomColor: '#e5e7eb',
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '600',
              color: '#000',
            },
            headerLeft: () => (
              <FontAwesome 
                name="chevron-left" 
                size={20} 
                color="#000" 
                style={{ marginLeft: 10 }}
                onPress={() => console.log('Back pressed')} // Adicione sua lógica de navegação
              />
            ),
            headerRight: () => (
              <FontAwesome 
                name="gear" 
                size={20} 
                color="#000" 
                style={{ marginRight: 10 }}
                onPress={() => console.log('Settings pressed')} // Adicione sua lógica de navegação
              />
            ),
          }} 
        />

      </Stack>
      
    </ThemeProvider>
  );
}
