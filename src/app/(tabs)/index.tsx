import Properties from "@components/properties";
import { useIsFocused } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import { findAllFazendas } from "src/services/fazendas.api";

export default function TabOneScreen() {
  const isFocused = useIsFocused();

  const {
    data: propriedadesData,
    isFetching,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["properties", "component"],
    queryFn: findAllFazendas,
    subscribed: isFocused,
  });

  return (
    <View className="flex flex-col flex-1 p-6 bg-white">
      <Properties data={propriedadesData} />
    </View>
  );
}
