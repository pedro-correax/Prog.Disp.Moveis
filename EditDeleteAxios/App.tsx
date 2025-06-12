import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

type Produto = {
  _id?: string;
  nome: string;
  preco: number;
};

const API_URL = "http://localhost:3000";

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState<string | null>(null);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    try {
      const resposta = await axios.get(`${API_URL}/produtos`);
      const listaDeProdutos: Produto[] = resposta.data.map((p: Produto) => ({
        _id: p._id,
        nome: p.nome,
        preco: p.preco,
      }));
      setProdutos(listaDeProdutos);
    } catch (error) {
      console.error("[ERRO]: em Get do /produtos");
    }
  };

  const addProduto = async () => {
    if (modoEdicao) {
      editarProduto(produtoEditando || "", Number(precoProduto));
      return;
    }

    try {
      const novoProduto = {
        nome: nomeProduto,
        preco: precoProduto,
      };
      await axios.post(`${API_URL}/produto`, novoProduto);
      await getProdutos();
      limparCampos();
    } catch (error) {
      console.error("[ERRO]: em post do /produto");
    }
  };

  const removerProduto = async (nome: string) => {
    try {
      await axios.delete(`${API_URL}/produto`, {
        data: { nome },
      });
      await getProdutos();
      limparCampos();
    } catch (error) {
      console.error("[ERRO]: em delete do /produto");
    }
  };

  //arrumar
  const editarProduto = async (nome: string, preco: number) => {
    try {
      await axios.put(`${API_URL}/produto`, {
        data: {
          nome,
          preco,
        },
      });
      await getProdutos();
      limparCampos();
    } catch (error) {
      console.error("[ERRO]: em put do /produto");
    }
  };

  const iniciarEdicao = (produto: Produto) => {
    setNomeProduto(produto.nome);
    setPrecoProduto(produto.preco.toString());
    setProdutoEditando(produto.nome);
    setModoEdicao(true);
  };

  const limparCampos = () => {
    setNomeProduto("");
    setPrecoProduto("");
    setProdutoEditando(null);
    setModoEdicao(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          value={nomeProduto}
          placeholder="Digite o nome..."
          onChangeText={setNomeProduto}
          editable={!modoEdicao}
        />

        <TextInput
          style={styles.input}
          value={precoProduto}
          placeholder="Digite o preço..."
          onChangeText={setPrecoProduto}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={addProduto}>
          <Text style={{ color: "white" }}>{modoEdicao ? "Salvar" : "Add"}</Text>
        </TouchableOpacity>

        {modoEdicao && (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "gray" }]}
            onPress={limparCampos}
          >
            <Text style={{ color: "white" }}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlashList
        data={produtos}
        keyExtractor={(item) => item._id || item.nome}
        estimatedItemSize={80}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.nome} - R${item.preco},00
            </Text>

            <View style={styles.linha}>
              <TouchableOpacity onPress={() => iniciarEdicao(item)}>
                <MaterialIcons name="edit-square" size={22} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => removerProduto(item.nome)}>
                <MaterialIcons name="highlight-remove" size={22} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#8aff86",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: "40%",
    padding: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 70,
  },
  linha: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 10,
  },
});
