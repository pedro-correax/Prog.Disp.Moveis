import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Botao from './src/components/Botao';
import "./global.css"


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem-vindo ao Aplicativo!</Text>
      <Text style={styles.paragraph}>Mussum Ipsum, cacilds vidis litro abertis. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Quem manda na minha terra sou euzis! Viva Forevis aptent taciti sociosqu ad litora torquent. Leite de capivaris, leite de mula manquis sem cabeça.
      </Text>
      <Text style={styles.paragraph}>Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Sapien in monti palavris qui num significa nadis i pareci latim. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
      </Text>

      <TextInput style={styles.input} placeholder='Login' 
      inputMode='numeric' maxLength={50}/>

      <TextInput style={styles.input} placeholder='Senha'
      secureTextEntry={true}/>

      <Botao icone='log-in' texto='Logar' cor='blue'/>
      <Botao icone='user-plus' texto='Cadastrar' cor='green'/>

      <Text/>
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  title:{
    fontSize:20,
    fontWeight: 700
  },
  paragraph:{
    fontSize: 18,
    marginTop:16,
    textAlign: 'justify'
  }, 
  input:{
    borderWidth: 1,
    borderRadius:6,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 16,
    width: "100%"
  }, 
  
});
