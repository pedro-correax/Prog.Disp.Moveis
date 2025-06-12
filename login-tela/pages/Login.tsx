import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View,Alert } from "react-native";

export default function TelaInicial() {
  const navigation = useNavigation<any>();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  
  const resolveLogin = () => {
    console.log(user, password)
    if(user == 'Aderbal' && password == '123456')
      navigation.navigate("Dashboard");

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Usuário:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite seu usuário"
        value={user}
        onChangeText={setUser}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button onPress={resolveLogin}>
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 12,
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  input: {
    width: '100%',
    height: 48,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  }
});
