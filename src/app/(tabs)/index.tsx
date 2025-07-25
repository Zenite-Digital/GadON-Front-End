import Properties from "@components/properties";
import { View } from "react-native";

import PropertiesCards from "@constants/mock-data/PropertiesCards";
import EditProfileScreen from '../atualizar-perfil';

export default function TabOneScreen() {
  return (
    <View className="flex flex-col flex-1 p-6 bg-white ">
      <Properties data={PropertiesCards} />
      <EditProfileScreen />
    </View>
  );
}
