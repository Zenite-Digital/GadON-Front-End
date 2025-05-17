import { StyleSheet } from 'react-native';

import EditProfileScreen from '../atualizar-perfil';
import { Text, View } from '@components/Themed';
import TemplateComponent from '@components/template-component';
import EditScreenInfo from '@components/edit-screen-info/EditScreenInfo';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <TemplateComponent />
      <TemplateComponent text="Texto" />
      <EditProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});