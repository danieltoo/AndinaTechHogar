
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function RegisterScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de usuarios</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Teléfono o rol"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />

      <Pressable style={styles.boton}>
        <Text style={styles.textoBoton}>Crear cuenta</Text>
      </Pressable>

      <Text style={styles.aviso}>
        Formulario visual. El registro se conectará después.
      </Text>
    </ScrollView>
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
