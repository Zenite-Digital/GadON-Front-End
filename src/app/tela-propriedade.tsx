import { Casa, Lixo } from "@assets/icons";
import Button from "@components/button";
import Card from "@components/card";
import FontAwesomeIcon from "@components/font-awesome-icon";
import { useLocalSearchParams } from "expo-router";
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

    const params = useLocalSearchParams<{ id?: string }>();

    console.debug(params);

    return (

        <ScrollView style={styles.container}>
            <Image
                source={{ uri: 'https://lh6.googleusercontent.com/c521mvIJRt2PqK6Gh4vqHXqjf2312qRu1To9cKLoFQaT5s6qOUNGV1tTKz7sYwz1Dka8YIlnXLsI6hAhRnXjh-K8S7pvKp97YF-arrxm4QZW7CQR3GOixVyGHNhKKfR9dK43bXnw' }}
                style={styles.Image}
            />

            <View
                className="flex flex-row items-center justify-between rounded-lg p-4 mb-4 bg-neutral-100 overflow-hidden "
            >
                <View className="flex flex-row items-center justify-center mr-4">
                    <Casa
                        stroke="#000000"
                        iconSize="md"
                        className="mr-2"/>
                </View>
                <View className="w-full flex flex-col flex-wrap">
                    <Text className="flex flex-col font-bold">Nome Propriedade {params.id}</Text>
                    <Text className="text-wrap flex flex-col flex-wrap">tamanho da área · qtd animais · qtd pessoas </Text>
                </View>
            </View>


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

            ></Button>

            <View style={styles.espaco}></View>
            <Button
                variant= "outline"
                className="bg-red-500 rounded-3xl   flex align-middle h-5 items-center justify-center self-center w-full p-8"
                Icon={<Lixo stroke= "#ffffff" iconSize="md" />}
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
                                    // Aqui você pode adicionar a lógica para excluir a propriedade
                                    console.log("Propriedade excluída");
                                },
                            },
                        ],
                        { cancelable: true }
                    );
                }}
            ></Button>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        width: Dimensions.get('window').width,
    },
    botao: {
        display: "flex",
        width: Dimensions.get('window').width - 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#EEEEEE",
    },

    Image: {
        width: Dimensions.get('window').width - 12,
        height: Dimensions.get('window').width / 1.5,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex",
        alignSelf: "center",

    },
    espaco: {
        marginTop: 50,
    },

    botaoExcluir: {
        display: "flex",
        width: 90,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#DC3545",
        color: "#fff",
        alignSelf: "center",
        borderRadius: 12,
    },

    infoCard: {
        width: Dimensions.get('window').width - 55,
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        marginTop: 20,
        marginBottom: 25,
        display: "flex",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
    }
})