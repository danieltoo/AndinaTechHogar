
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function NavBar({ onNavigate }) {
  const opciones = [
    'Inicio',
    'Registro',
    'Login',
    'Usuarios',
  ];

  const nombres = {
    Inicio: 'Inicio',
    Registro: 'Registro',
    Login: 'Iniciar sesión',
    Usuarios: 'Usuarios',
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.nav}
    >
      {opciones.map((pantalla) => (
        <Pressable
          key={pantalla}
          style={styles.boton}
          onPress={() => onNavigate(pantalla)}
        >
          <Text style={styles.texto}>
            {nombres[pantalla]}
          </Text>
        </Pressable>
      ))}
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
