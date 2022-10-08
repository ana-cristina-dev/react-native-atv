import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>

      <View style={{marginBottom:20}}>
        <Text style={styles.texto}>Nome: Ana Cristina Correia de Andrade</Text>
        <Text style={styles.texto}>Nº Matricula: 2019321847</Text>
      </View>

      <View>
        <Image
        style={styles.imagem}
        source={require("../../images/eu.jpeg")}/>  
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8d8383",
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
 
  texto: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
