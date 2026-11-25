
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ onSuccess }) {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    setError('');

    if (!email.trim() || !password) {
      setError('Ingresa tu correo y contraseña.');
      return;
    }

    try {
      setLoading(true);

      await signIn({
        email: email.trim().toLowerCase(),
        password,
      });

      onSuccess?.();
    } catch (err) {
      setError(
        err.message || 'No se pudo iniciar sesión.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable
        style={styles.boton}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.textoBoton}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </Text>
      </Pressable>

      {!!error && (
        <Text style={styles.error}>{error}</Text>
      )}
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
  error: {
    color: '#B91C1C',
    marginTop: 12,
  },
});
