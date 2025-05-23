import Button from "@components/button";
import { cn } from "@utils/cn";
import React, { useMemo } from "react";
import { View, Image, Text, SafeAreaView } from "react-native";

type CardsProps = {
  imageSource?: string;
  title?: string;
  description?: string;
  slots?: {
    image?: {
      className?: string;
    };
    title?: {
      className?: string;
    };
    description?: {
      className?: string;
    };
  };
};

const Card = ({ title, description, imageSource, slots }: CardsProps) => {
  const image = useMemo(
    () =>
      imageSource
        ? { uri: imageSource }
        : require("@assets/images/card-default.png"),
    [imageSource]
  );
  return (
    <SafeAreaView className="flex flex-1 w-full gap-3 overflow-hidden justify-between">
      <Image
        className={cn(
          "self-center w-44 h-44 rounded-lg",
          slots?.image?.className
        )}
        resizeMode="stretch"
        source={image}
      />
      <View className="justify-center gap-2">
        <View>
          {description && (
            <Text
              numberOfLines={2}
              className={cn(
                "text-sm text-gray-500",
                slots?.description?.className
              )}
            >
              {description}
            </Text>
          )}
          {title && (
            <Text
              numberOfLines={1}
              className={cn("text-lg font-semibold", slots?.title?.className)}
            >
              {title}
            </Text>
          )}
        </View>
        <View>
          <Button
            className="rounded-full"
            color="main"
            fullWidth
            text="Acessar"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;
