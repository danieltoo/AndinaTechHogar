
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { useAuth } from '../context/AuthContext';

export default function RegisterScreen({ onSuccess }) {
  const { signUp } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function handleRegister() {
    setError('');
    setMessage('');

    if (!fullName.trim() || !email.trim() || !password) {
      setError('Completa nombre, correo y contraseña.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      setLoading(true);

      const data = await signUp({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        password,
      });

      if (data.session) {
        setMessage('Cuenta creada correctamente.');
        onSuccess?.();
      } else {
        setMessage(
          'Cuenta creada. Revisa tu correo para confirmar el registro y luego inicia sesión.'
        );
      }
    } catch (err) {
      setError(err.message || 'No se pudo registrar el usuario.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de usuarios</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={setFullName}
      />

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
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
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
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.textoBoton}>
          {loading ? 'Registrando...' : 'Crear cuenta'}
        </Text>
      </Pressable>

      {!!error && (
        <Text style={styles.error}>{error}</Text>
      )}

      {!!message && (
        <Text style={styles.mensaje}>{message}</Text>
      )}

      <Text style={styles.aviso}>
        El rol inicial se asigna automáticamente como usuario.
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
  error: {
    color: '#B91C1C',
    marginTop: 12,
  },
  mensaje: {
    color: '#166534',
    marginTop: 12,
  },
  aviso: {
    marginTop: 15,
    color: '#64748B',
    textAlign: 'center',
  },
});
