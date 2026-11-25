
import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function NavBar({
  onNavigate,
  session,
  onLogout,
}) {
  const opciones = session
    ? [
        { texto: 'Inicio', pantalla: 'Inicio' },
        { texto: 'Usuarios', pantalla: 'Usuarios' },
      ]
    : [
        { texto: 'Inicio', pantalla: 'Inicio' },
        { texto: 'Registro', pantalla: 'Registro' },
        { texto: 'Iniciar sesión', pantalla: 'Login' },
      ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.nav}
    >
      {opciones.map((opcion) => (
        <Pressable
          key={opcion.pantalla}
          style={styles.boton}
          onPress={() => onNavigate(opcion.pantalla)}
        >
          <Text style={styles.texto}>
            {opcion.texto}
          </Text>
        </Pressable>
      ))}

      {session && (
        <Pressable
          style={styles.boton}
          onPress={onLogout}
        >
          <Text style={styles.texto}>
            Cerrar sesión
          </Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#EAF1F6',
    maxHeight: 55,
  },
  boton: {
    paddingHorizontal: 16,
    paddingVertical: 17,
  },
  texto: {
    color: '#123B5D',
    fontWeight: '600',
  },
});
