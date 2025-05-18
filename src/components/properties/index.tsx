import { ChevronDireita } from "@assets/icons";
import Card from "@components/card";
import Colors from "@constants/Colors";
import React from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
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
    <View className="flex flex-col gap-4">
      <View className="flex flex-row gap-3 items-center">
        <Text className="text-[16px] font-semibold">Propriedades</Text>
        <View className="bg-outros-secondary rounded-full p-1">
          <ChevronDireita iconSize="sm" />
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
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
              />
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

export default Properties;
