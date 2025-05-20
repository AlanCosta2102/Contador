import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ContadorSimples() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('');

  function aumentar() {
    setContador(contador + 1);
    setMensagem('');
  }

  function diminuir() {
    setContador(contador - 1);
    setMensagem('');
  }

  function resetar() {
    setContador(0);
    setMensagem('Contador reiniciado!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador App</Text>

      <View style={styles.circulo}>
        <Text style={styles.contador}>{contador}</Text>
      </View>

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#ff6b6b' }]} onPress={diminuir}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#4ecdc4' }]} onPress={resetar}>
          <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#1dd1a1' }]} onPress={aumentar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rodape}>Aprenda React Native com Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  circulo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 10,
  },
  contador: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  mensagem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  botoes: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  botao: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 50,
    elevation: 3,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: '#aaa',
  },
});
