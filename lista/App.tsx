import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

type Produto = {
  _id?: string,
  nome: string,
  preco: number
}

const API_URL = 'http://localhost:3000';

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');

  useEffect(() => {
    getProdutos();
  }, [])

  const getProdutos = async () => {
    try {
      const resposta = await axios.get(`${API_URL}/produtos`);
      const listaDeProdutos : Produto[] = [];
      console.log(resposta)
      for (let i = 0; i < resposta.data.length; i++) {
        listaDeProdutos.push({
          _id: resposta.data[i]._id,
          nome: resposta.data[i].nome,
          preco: resposta.data[i].preco,
        });
      } 
      setProdutos(listaDeProdutos);

    } catch (error) {
      console.error('[ERRO]: em Get do /produtos')
    }
  };

    const addProduto = async() => {
      try{
        const novoProduto = {
          nome: nomeProduto,
          preco: precoProduto
        }

        await axios.post(`${API_URL}/produto`, novoProduto)
        await getProdutos();
        setNomeProduto('');
        setPrecoProduto('');
        
      }catch (error){
        console.error('[ERRO]: em post do /produtos')
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TextInput style={styles.input} 
        value={nomeProduto} placeholder="Digite nome..." 
        onChangeText={setNomeProduto}
        />
    

        <TextInput style={styles.input} 
        value={precoProduto} placeholder="Digite preço..." 
        onChangeText={setPrecoProduto}
        />
        

        <TouchableOpacity style={styles.button} onPress={addProduto}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlashList
        data={produtos}
        renderItem={  ({ item }) => 
          <View style={styles.item}>
            <Text>{item.nome} - R${item.preco},00</Text>

            <View style={styles.linha}>
              <TouchableOpacity>
                <MaterialIcons name="edit-square" size={22}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialIcons name="highlight-remove" size={22}/>
              </TouchableOpacity>
            </View>
          </View>
      }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#8aff86',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '60%',
    padding: 5
  },
  button: {
    backgroundColor: 'blue',
    width: 50,
    padding: 10,
    borderRadius: 5,
    alignContent: 'center'
  },
  linha: {
    flexDirection: 'row',
    gap: 15
  }
});