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

    const params = useLocalSearchParams<{id?:string}>();

    console.debug(params);
    return (
        <view style={{
            display: "flex",
            flexDirection: "column",
            padding: 24,
            alignItems: "center",
            justifyContent: "center",

        }}>
            <Image
                source={{uri: 'https://lh6.googleusercontent.com/c521mvIJRt2PqK6Gh4vqHXqjf2312qRu1To9cKLoFQaT5s6qOUNGV1tTKz7sYwz1Dka8YIlnXLsI6hAhRnXjh-K8S7pvKp97YF-arrxm4QZW7CQR3GOixVyGHNhKKfR9dK43bXnw'}}
                style={{ width: Dimensions.get('window').width, height: 600, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }}
            />
        </view>

    );
};