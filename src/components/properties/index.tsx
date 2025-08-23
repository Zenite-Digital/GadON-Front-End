import { ChevronDireita } from "@assets/icons";
import Card from "@components/card";
import Colors from "@constants/Colors";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from "react-native";
type Propertie = {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
};

type PropertiesProps = {
  data: Propertie[];
};

const Properties = ({ data }: PropertiesProps) => {
  return (
    <ScrollView contentContainerClassName="flex flex-col gap-4">
      <View className="flex flex-row gap-3 items-center">
        <Text className="text-[16px] font-semibold">Propriedades</Text>
        <View className="bg-outros-secondary rounded-full p-1">
          <ChevronDireita iconSize="sm" />
        </View>
      </View>
      <View className="grid grid-cols-2 font-sans">
        {data?.map((item, index) => {
          return (
            <TouchableHighlight
              className="flex-1 m-2 p-2 bg-white rounded-2xl active:bg-outros-hover"
              underlayColor={Colors.outros.hover}
            >
              <Card
                description={item.descricao}
                title={item.nome}
                imageSource={item.imagem}
                key={`${item.id}-${index}`}
                pathname={item.id}
              />
            </TouchableHighlight>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Properties;
