import React, { useMemo } from "react";
import { ChevronDireita } from "@assets/icons";
import Card, { CardContent, CardFooter } from "@components/card";
import { View, Text, ScrollView, Image } from "react-native";
import { FazendaDTO } from "src/types/dtos/fazenda.dto";
import Button from "@components/button";
import { router } from "expo-router";

type PropertiesProps = {
  data?: FazendaDTO[];
};

const CardPropriedade: React.FC<FazendaDTO> = (propriedade) => {
  const image = useMemo(
    () =>
      propriedade.imagem
        ? { uri: propriedade.imagem }
        : require("@assets/images/card-default.png"),
    [propriedade.imagem]
  );

  const navigateToProperty = () =>
    router.push({
      pathname: "/tela-propriedade",
      params: {
        id: propriedade.id,
        propriedade: propriedade.nome,
      },
    });

  return (
    <Card onPress={navigateToProperty}>
      <CardContent>
        <Image
          className="self-center w-44 h-44 rounded-lg"
          resizeMode="stretch"
          source={image}
        />
        <View className="justify-center gap-2">
          {propriedade.nome && (
            <Text numberOfLines={1} className="text-lg font-semibold">
              {propriedade.nome}
            </Text>
          )}
        </View>
      </CardContent>
      <CardFooter>
        <Button
          className="rounded-full"
          color="main"
          fullWidth
          text="Acessar"
          onPress={navigateToProperty}
        />
      </CardFooter>
    </Card>
  );
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
      <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 font-sans">
        {data?.map((item, index) => {
          return (
            <CardPropriedade
              key={`propriedade-${item.id}-${index}`}
              {...item}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Properties;
