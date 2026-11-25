
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />

      <Pressable style={styles.boton}>
        <Text style={styles.textoBoton}>Ingresar</Text>
      </Pressable>

      <Text style={styles.aviso}>
        El acceso se conectará en una fase posterior.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#123B5D',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5DEE7',
    borderRadius: 8,
    padding: 13,
    marginBottom: 14,
  },
  boton: {
    backgroundColor: '#123B5D',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  aviso: {
    marginTop: 15,
    color: '#64748B',
    textAlign: 'center',
  },
});
