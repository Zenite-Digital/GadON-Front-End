import Button from "@components/button";
import Card from "@components/card";
import FontAwesomeIcon from "@components/font-awesome-icon";
import { useLocalSearchParams } from "expo-router";
import React from "react";
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

            <span
                style = {styles.infoCard}
            >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesomeIcon name="home" size={24} color="#000" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fazenda {params.id}</Text>
                    <Text style={{ fontSize: 14, color: '#555' }}>placeholder text</Text>
                </div>
            </span>
            

            <Button
                fullWidth={true}
                text="Visão Geral"
                variant="solid"
                style= {styles.botao}

            ></Button>
                        <Button
                fullWidth={true}
                text="Finanças"
                variant="solid"
                style= {styles.botao}

            ></Button>
                        <Button
                fullWidth={true}
                text="Lotes"
                variant="solid"
                style= {styles.botao}

            ></Button>

            <span style={styles.espaco}></span>
            <Button
                variant="solid"
                style={{
                    ...styles.botaoExcluir,
                    backgroundColor: "#DC3545",
                }}
                Icon = {<FontAwesomeIcon name="trash"/>}
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
        width: Dimensions.get('window').width -12,
        height: Dimensions.get('window').width/1.5,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex",
        alignSelf: "center",
        
    },
    espaco:{
        marginTop: 50,
    },

    botaoExcluir:{
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

    infoCard:{
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