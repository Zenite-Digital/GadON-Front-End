import React, { useCallback } from "react";
import { Tabs, useRouter, ScreenProps } from "expo-router";
import { View } from "react-native";

import { useClientOnlyValue } from "@hooks/useClientOnlyValue";

import "../../../global.css";
import TabBarIcon from "@components/tab-bar-icon";
import { Relatorio } from "@assets/icons/Relatorio";
import { Casa, Vaca, Chat, Sino, Usuario} from "@assets/icons";
import FontAwesomeIcon from "@components/font-awesome-icon";
import Colors from "@constants/Colors";

export default function TabLayout() {
  const router = useRouter();
  const getIconActive = useCallback((activeColor: string) => {
    return activeColor === "main";
  }, []);

  const createScreenOptions = ({
    title,
    headerTitle,
    tabBarIcon,
    headerLeft,
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
        paddingLeft: 15,
      },
      headerRightContainerStyle: {
        maxWidth: 70,
        width: 70,
        paddingRight: 10,
      },
      headerTitle,
      tabBarIcon,
      headerLeft,
    },
  });

  return (
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
          headerLeft: () => (
            <FontAwesomeIcon
              name="bars"
              onPress={() => router.push("/cadastro-perfil")}
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
        name="exportar-relatorio"
        {...createScreenOptions({
          title: "",
          headerTitle: "Exportar Relatório",
          tabBarIcon: ({ color }: { color: string }) => {
            const active = getIconActive(color);
            <TabBarIcon
              icon={Relatorio}
              name="Relatório"
              active={getIconActive(color)}
            />
            return <TabBarIcon icon={Relatorio} name="Exportar" active={active} />;
          },
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
      
      {/* <Tabs.Screen
        name="dashboard"
        {...createScreenOptions({
          title: "",
          headerTitle: "Finanças",
          tabBarIcon: () => <FontAwesomeIcon name="money" />,
        })}
      /> */}
    </Tabs>
  );
}
