import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native";

export default function CadastroPerfil() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [imagemPerfil, setImagemPerfil] = useState<any>(require('../../assets/images/app-icon.png')); // imagem padrão de perfil
  const [numeroCadPro, setNumeroCadPro] = useState("");
  const [nomePropriedade, setNomePropriedade] = useState("");
  const [areaPropriedade, setAreaPropriedade] = useState("");
  const [qtdAnimais, setQtdAnimais] = useState("");
  const [adicionarPropiedade, setadicionarPropiedade] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 8 }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{ width: 300, height: 100, marginBottom: 0 }}
          resizeMode="contain"
          
        />
      </View>
      <View style={{ alignItems: "center", marginBottom: 8 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Crie sua conta</Text>
        <Text style={{ color: "#222", fontSize: 16, marginTop: 4 }}>Vamos cadastrar você!</Text>
      </View>
      
      <View style={{ alignItems: "center", marginVertical: 24 }}>
        <View>
          <Image
            source={imagemPerfil}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              borderWidth: 3,
              borderColor: "#005E24",
              backgroundColor: "#fff"
            }}
          />
          
          <View style={{ alignItems: "center", marginVertical: 24 }}>
        <View>
          
          <TouchableOpacity
            // onPress={}
            style={{
              position: "absolute",
              
              left: 20,
              bottom: 0,
              backgroundColor: "#005E24",
              borderRadius: 20,
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "#fff",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20 }}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>
        </View>
      </View>
      
      <View style={{ gap: 12, width: "100%" }}>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Nome Completo"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="email@exemplo.com"
          style={styles.input}
        />
        <TextInput
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry={!mostrarSenha}
          style={styles.input}
        />
        <TextInput
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholder="Confirmar senha"
          secureTextEntry={!mostrarSenha}
          style={styles.input}
        />
        <TouchableOpacity
          style={[styles.input, { backgroundColor: "#f5f5f5", justifyContent: "center", height: 48, flexDirection: "row"}]}
          onPress={() => setadicionarPropiedade(!adicionarPropiedade)}
          activeOpacity={0.7}
        >
          <Text style={{ color: "#888", flex: 1, fontSize: 18 }}>
            Adicionar Propriedade
          </Text>
          <Text style={{ color: "#888", fontSize: 18 }}>{adicionarPropiedade ? "▲" : "▼"}</Text>

        </TouchableOpacity>
        {adicionarPropiedade && (
          <View style={{ gap: 12, marginTop: 8 }}>
            <TextInput
              value={numeroCadPro}
              onChangeText={setNumeroCadPro}
              placeholder="Número do CadPro"
              style={styles.input}
              keyboardType="numeric"
            />
            <TextInput
              value={nomePropriedade}
              onChangeText={setNomePropriedade}
              placeholder="Nome da Propriedade"
              style={styles.input}
            />
            <TextInput
              value={areaPropriedade}
              onChangeText={setAreaPropriedade}
              placeholder="Área disponível da propriedade (ha)"
              style={styles.input}
              keyboardType="numeric"
            />
            <TextInput
              value={qtdAnimais}
              onChangeText={setQtdAnimais}
              placeholder="Quantidade de animais"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
        )}
      </View>
      
      <View style={{ alignItems:"center", marginTop: 24, gap: 12, width: "100%" }}>
        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSecondary}>
          <Text style={styles.btnSecondaryText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={{ marginTop: 18, fontSize: 12, color: "#444", textAlign: "center" }}>
        Ao continuar, você concorda com os <Text style={{ fontWeight: "bold" }}>Termos de Serviço</Text> e <Text style={{ fontWeight: "bold" }}>Política de Privacidade</Text>.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 430,
    alignSelf: "center",
    fontFamily: "sans-serif",
    padding: 24,
    flex: 1,
    backgroundColor: "#fff"
  },
  input: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "center",
    fontSize: 16,
    backgroundColor: "#fafafa",
    marginBottom: 0,
    marginTop: 0,
    width: "80%"
  },
  btnPrimary: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#005E24",
    alignItems: "center",
    width: "80%",
    
  },
  btnPrimaryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "center",
  },
  btnSecondary: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#eee",
    alignItems: "center",
    width: "80%",
  },
  btnSecondaryText: {
    color: "#888",
    fontWeight: "bold",
    fontSize: 16
  }
});