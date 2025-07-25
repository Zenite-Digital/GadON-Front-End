import { Casa, Lixo } from "@assets/icons";
import Button from "@components/button";
import Card from "@components/card";
import FontAwesomeIcon from "@components/font-awesome-icon";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Alert } from "react-native";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";


export default function ProprietiesScreen() {

    const params = useLocalSearchParams<{ id?: string, propriedade?: string }>();

    console.debug(params);

    return (

        <ScrollView className="p-6 xl flex-col " contentContainerClassName="flex-grow grid grid-cols-5">
            <Image
                className=" rounded-lg mb-4 col-span-3"
                resizeMode="cover"
                resizeMethod="scale"
                source={{ uri: 'https://lh6.googleusercontent.com/c521mvIJRt2PqK6Gh4vqHXqjf2312qRu1To9cKLoFQaT5s6qOUNGV1tTKz7sYwz1Dka8YIlnXLsI6hAhRnXjh-K8S7pvKp97YF-arrxm4QZW7CQR3GOixVyGHNhKKfR9dK43bXnw' }}
            />
            <View className="col-span-2 flex flex-col justify-between">
                <View
                    className="flex flex-row items-center justify-between rounded-lg p-4 mb-4 bg-neutral-100 overflow-hidden "
                >
                    <View className="flex flex-row items-center justify-center mr-4">
                        <Casa
                            stroke="#000000"
                            iconSize="md"
                            className="mr-2" />
                    </View>
                    <View className="w-full flex flex-col flex-wrap">
                        <Text className="flex flex-col font-bold">{params.propriedade} {params.id}</Text>
                        <Text className="text-wrap flex flex-col flex-wrap">tamanho da área · qtd animais · qtd pessoas </Text>
                    </View>
                </View>

                <view className=" align-middle items-center justify-center mb-4 xl:flex-row flex-col w-full self-center">

                    <Button
                        fullWidth={true}
                        text="Visão Geral"
                        variant="solid"
                        className="bg-neutral-200 color-black flex align-middle items-center justify-center h-16 mb-4"

                    ></Button>
                    <Button
                        fullWidth={true}
                        text="Finanças"
                        variant="solid"
                        className="bg-neutral-200 color-black flex align-middle items-center justify-center h-16 mb-4"

                    ></Button>
                    <Button
                        fullWidth={true}
                        text="Lotes"
                        variant="solid"
                        className="bg-neutral-200 color-black flex align-middle items-center justify-center h-16"
                        onPress={() => {
                            router.push({
                                pathname: "/lotes",
                                params: {
                                    propriedade: params.propriedade,
                                    id: params.id,
                                },
                            })
                        }}

                    ></Button>
                </view>

                <View className="mb-10"></View>
                <Button
                    variant="solid"
                    color="danger"
                    className=" rounded-3xl flex align-middle h-5 items-center justify-center self-center w-full p-8 h-auto"
                    Icon={<Lixo stroke="#ffffff" iconSize="md" />}
                    onPress={() => {
                        Alert.alert(
                            "Excluir Propriedade",
                            "Você tem certeza que deseja excluir esta propriedade?",
                            [
                                {
                                    text: "Cancelar",
                                    style: "cancel",
                                },
                                {
                                    text: "Excluir",
                                    style: "destructive",
                                    onPress: () => {
                                        console.log("Propriedade excluída");
                                    },
                                },
                            ],
                            { cancelable: true }
                        );
                    }}
                ></Button>
            </View>

            {/* <view className="p-10"></view> */}
        </ScrollView>

    );
};

