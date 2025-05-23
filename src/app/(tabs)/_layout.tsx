import React, { useCallback } from "react";
import { Tabs } from "expo-router";

import { useClientOnlyValue } from "@hooks/useClientOnlyValue";

import "../../../global.css";
import TabBarIcon from "@components/tab-bar-icon";
import { Casa, Vaca, Chat } from "@assets/icons";
import FontAwesomeIcon from "@components/font-awesome-icon";
import Colors from "@constants/Colors";

export default function TabLayout() {
    const getIconActive = useCallback((activeColor: string) => {
        return activeColor === "main";
    }, []);

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
                options={{
                    title: "",
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
                        fontWeight: 600,
                    },
                    headerLeft: () => <FontAwesomeIcon name="bars" />,
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
                    headerTitle: "Início",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            icon={Casa}
                            name="Inicio"
                            active={getIconActive(color)}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: "",
                    headerTitle: "Finanças",
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
                        fontWeight: 600,
                    },
                    headerLeft: () => <FontAwesomeIcon name="bars" />,
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
                    headerTitleAlign: "center", // Manter esta propriedade que já existia
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            icon={FontAwesomeIcon}
                            name="money"
                            active={getIconActive(color)}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
