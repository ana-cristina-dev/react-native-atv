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
        source={require("../../images/eu.jpeg")}/> {/*Minha foto */} 
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
    width: 400,
    height: 600,
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
    fontWeight: "bold",
  },
});
