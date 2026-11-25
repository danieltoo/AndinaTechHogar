
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { supabase } from '../lib/supabase';

export default function UsersScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadUsers() {
    setError('');

    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, email, phone, role, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
      return;
    }

    setUsuarios(data || []);
  }

  useEffect(() => {
    let mounted = true;

    async function initialLoad() {
      setLoading(true);
      await loadUsers();

      if (mounted) {
        setLoading(false);
      }
    }

    initialLoad();

    // Escuchar cambios en la tabla profiles
    const channel = supabase
      .channel('profiles-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
        },
        () => {
          loadUsers();
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Usuarios registrados
      </Text>

      <Pressable
        style={styles.boton}
        onPress={loadUsers}
      >
        <Text style={styles.textoBoton}>
          Actualizar lista
        </Text>
      </Pressable>

      {loading && (
        <Text style={styles.info}>
          Cargando usuarios...
        </Text>
      )}

      {!!error && (
        <Text style={styles.error}>
          Error: {error}
        </Text>
      )}

      {!loading && !error && usuarios.length === 0 && (
        <Text style={styles.info}>
          Todavía no hay usuarios registrados.
        </Text>
      )}

      {usuarios.map((usuario) => (
        <View key={usuario.id} style={styles.card}>
          <Text style={styles.nombre}>
            {usuario.full_name}
          </Text>

          <Text style={styles.dato}>
            Correo: {usuario.email}
          </Text>

          <Text style={styles.dato}>
            Teléfono: {usuario.phone || 'No registrado'}
          </Text>

          <Text style={styles.dato}>
            Rol: {usuario.role}
          </Text>
        </View>
      ))}
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
    marginBottom: 16,
  },
  boton: {
    backgroundColor: '#123B5D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#123B5D',
    marginBottom: 8,
  },
  dato: {
    color: '#526575',
    marginTop: 4,
  },
  info: {
    color: '#64748B',
    marginTop: 10,
  },
  error: {
    color: '#B91C1C',
    marginTop: 10,
  },
});
