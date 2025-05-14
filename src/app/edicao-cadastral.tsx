import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Alert } from 'react-native';
import { View, Text } from '@components/Themed';

export default function EditProfileScreen() {
  const [name, setName] = useState('John Doe'); // Exemplo de dado inicial
  const [email, setEmail] = useState('johndoe@example.com');

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar os dados no backend
    Alert.alert('Perfil atualizado!', `Nome: ${name}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});