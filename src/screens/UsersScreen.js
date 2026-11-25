
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const usuariosPrueba = [
  { id: '1', nombre: 'Usuario de prueba', correo: 'usuario1@example.com' },
  { id: '2', nombre: 'Usuario de demostración', correo: 'usuario2@example.com' },
];

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usuarios registrados</Text>

      <Text style={styles.aviso}>
        Datos de demostración, aún no consultados desde Supabase.
      </Text>

      {usuariosPrueba.map((usuario) => (
        <View key={usuario.id} style={styles.card}>
          <Text style={styles.nombre}>{usuario.nombre}</Text>
          <Text style={styles.correo}>{usuario.correo}</Text>
        </View>
      ))}
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
    marginBottom: 12,
  },
  aviso: {
    color: '#64748B',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#123B5D',
  },
  correo: {
    color: '#64748B',
    marginTop: 5,
  },
});
