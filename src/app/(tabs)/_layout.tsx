import React, { useCallback, useState } from "react";
import { Tabs, useRouter, ScreenProps } from "expo-router";

import { useClientOnlyValue } from "@hooks/useClientOnlyValue";

import "../../../global.css";
import TabBarIcon from "@components/tab-bar-icon";
import { Casa, Vaca, Chat, Sino, Usuario } from "@assets/icons";
import FontAwesomeIcon from "@components/font-awesome-icon";
import Colors from "@constants/Colors";
import { TouchableOpacity, Image, useWindowDimensions, View, Pressable, ScrollView } from "react-native";
import Perfil from "../perfil";
import Button from "@components/button";

export default function TabLayout() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const getIconActive = useCallback((activeColor: string) => {
    return activeColor === "main";
  }, []);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const screenWidth = useWindowDimensions().width;
  const isDesktop = screenWidth > 768;

  const createScreenOptions = ({
    title,
    headerTitle,
    tabBarIcon,
  }: ScreenProps & {
    title: string;
    headerTitle: string;
    tabBarIcon: ({ color }: { color: string }) => void;
    headerLeft?: () => React.JSX.Element;
  }): ScreenProps => ({
    options: {
      title,
      headerBackgroundContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.brand.medium,
      },
      headerTitleContainerStyle: {
        flexGrow: 1,
        alignItems: "center",
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "600",
      },
      headerLeftContainerStyle: {
        maxWidth: 70,
        width: 70,
        paddingLeft: 25,
      },
      headerRightContainerStyle: {
        maxWidth: 70,
        width: 70,
        paddingRight: 10,
      },
      headerTitle,
      tabBarIcon,
      headerLeft: () => (
        <FontAwesomeIcon
          name="bars"
          onPress={() => router.push("/tela-login")}
        />
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            if (isDesktop) {
              setSidebarVisible(true);
            } else {
              router.push("/perfil");
            }}}
          style={{ marginRight: 6 }}
          activeOpacity={0.8}
        >
          <Image
            source={{ uri: `https://ui-avatars.com/api/?name=${encodeURIComponent(
              nome || "Usuario"
            )}&size=256&background=ffffff&color=005E24` }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: Colors.brand.medium,
            }}
          />
        </TouchableOpacity>
      )
    },
  });

  return (
    <>
      {isDesktop && sidebarVisible && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
          <Pressable
            style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.25)" }}
            onPress={() => setSidebarVisible(false)}
          />
          
          {/* Painel lateral */}
          <View style={{ position: 'absolute', top: 0, right: 0, width: 500, height: '100%', backgroundColor: '#fff', zIndex: 1001 }}>
            <TouchableOpacity onPress={() => setSidebarVisible(false)} style={{ padding: 10, alignSelf: 'flex-end' }}>
              <Button
                Icon={<FontAwesomeIcon name="times" className="text-main" />}
                className="w-10 h-10 rounded-full bg-transparent items-center justify-center"
                onPress={() => setSidebarVisible(false)}
                accessibilityLabel="Fechar painel"
              />
            </TouchableOpacity>
            <ScrollView style={{ flex: 1, paddingHorizontal: 10 }} contentContainerStyle={{ paddingBottom: 20 }}>
              <Perfil />
            </ScrollView>
          </View>
        </View>
      )}
      
      

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "main",
          headerShown: useClientOnlyValue(false, true),
          tabBarStyle: {
            height: 62,
          },
          tabBarIconStyle: {
            alignItems: "center",
            justifyContent: "center",
            height: 50,
          },
          sceneStyle: {
            backgroundColor: Colors.light.background,
            paddingBottom: 18,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          {...createScreenOptions({
            title: "",
            headerTitle: "Início",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                icon={Casa}
                name="Inicio"
                active={getIconActive(color)}
              />
            ),

          })}
        />
        <Tabs.Screen
          name="animais"
          {...createScreenOptions({
            title: "",
            headerTitle: "Animais",
            tabBarIcon: ({ color }: { color: string }) => (
              <TabBarIcon
                icon={Vaca}
                name="Animais"
                active={getIconActive(color)}
              />
            ),
          })}
        />
        <Tabs.Screen
          name="notificacoes"
          {...createScreenOptions({
            title: "",
            headerTitle: "Notificações",
            tabBarIcon: ({ color }: { color: string }) => (
              <TabBarIcon
                icon={Sino}
                name="Notificações"
                active={getIconActive(color)}
              />
            ),
          })}
        />
        <Tabs.Screen
          name="perfil"
          {...createScreenOptions({
            title: "",
            headerTitle: "Perfil",
            tabBarIcon: ({ color }: { color: string }) => (
              <TabBarIcon
                icon={Usuario}
                name="Perfil"
                active={getIconActive(color)}
              />
            ),
          })}
        />
        <Tabs.Screen
          name="dashboard"
          {...createScreenOptions({
            title: "",
            headerTitle: "Finanças",
            tabBarIcon: () => <FontAwesomeIcon name="money" />,
          })}
        />
      </Tabs>
    </>
  );
}
