import { use, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [NovaTarefa, setNovatarefa] = useState("");

  const [ListaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (NovaTarefa.trim() === "") return;

    const tarefaObjeto = {
      id: String(Date.now()),
      texto: NovaTarefa,
    };
    setListaTarefas([...ListaTarefas, tarefaObjeto]);

    setNovatarefa("");
  };

  const removerTarefa = (idParaRemover) => {
    const listaFiltrada = ListaTarefas.filter(item => item.id !== idParaRemover);

    setListaTarefas(listaFiltrada)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
        placeholder="O que vamos fazer hoje?"
        value={NovaTarefa}
        onChangeText={setNovatarefa}
        />
          <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
            <Text style={styles.textoBotaoAdicionar}></Text>
          </TouchableOpacity>
      </View>
      
      <FlatList
      data={ListaTarefas}
      keyExtractor={(item) => item.id}

      renderItem={({item}) => (
        <View style={styles.itemLista}>
          <Text style={styles.textoItem}>{item.texto}</Text>

          <TouchableOpacity
          style={styles.botaoRemover}
          onPress={() => removerTarefa(item.id)}
          >
            <Text style={styles.textoBotaoRemover}>x</Text>
          </TouchableOpacity>
        </View>
      )}

      ListEmptyComponent={()=>(
        <Text style={styles.textoVazio}>
          Nenhuma tarefa por aqui. Você está livre
        </Text>
      )}
      >

      </FlatList>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo:{
    fontSize:20,
    fontWeight: 'bold',
    color:'#333'
  },
  inputContainer:{
    flexDirection:'row',
    marginBottom:20,
  },
  input:{
    flex:1,
    height:50,
    backgroundColor:'#fff',
    borderRadius:8,
    paddingHorizontal:15,
    fontSize:16,
    borderWidth:1,
    borderColor:'#ddd'
  },
  botaoAdicionar:{
    width:50,
    height:50,
    backgroundColor:'Red',
    borderRadius:8,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:10,
  },
  textoBotaoAdicionar:{
    color:'#ffff',
    fontSize:24,
    fontWeight:'bold'
  },
  itemLista:{
    flexDirection:'row',
    backgroundColor:'#ffff',
    padding:15,
    borderRadius:8,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'space-between',
    elevation:2,
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowOffset:{width:0, height:2},

  },
  textoItem:{
    fontSize:16,
    color:'#ff0000',
    flex:1,
  },
  botaoRemover:{
    backgroundColor:'#000000',
    width: 30,
    height:30,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
  },
  textoVazio: {
    textAlign:'center',
    color:'#888',
    fontSize:16,
    marginTop:30,
  }

});
