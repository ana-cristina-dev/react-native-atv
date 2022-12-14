import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native"; // Hook para navegação entre telas

export default function Home() { 
  
  const navigation = useNavigation(); // atribuindo as funções do hook useNavidation a uma constante chamada navigation

  return (
    <View style={styles.container}>
      <Image source={require("../../images/ifal.jpeg")} style={styles.imagem} /> 

      <TouchableOpacity
        style={styles.botton}
        onPress={() => navigation.navigate("Sobre")}> 


        <Text style={styles.texto}>Ir Para Sobre</Text> 
     
      </TouchableOpacity>
    </View>
  );
}

// estilo dos componentes da tela

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#8d8383'
  },
  imagem: {
    width: "90%",
    height: "70%",
    borderRadius: 10,
  },
  botton: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#1ecbe2",
    marginBottom: 10,
    marginTop: 30,
  },
  texto: {
    fontSize: 25,
    padding: 10,
    margin: 20,
    fontWeight:"bold",
  },
});
