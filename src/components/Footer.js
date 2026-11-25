
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.texto}>
        © 2026 Andina Tech & Hogar
      </Text>
      <Text style={styles.texto}>
        Desarrollado por el equipo de trabajo
      </Text>
      <Text style={styles.version}>
        Versión 1.0.0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#123B5D',
    padding: 15,
    alignItems: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 4,
  },
  version: {
    color: '#BFD5E5',
    fontSize: 11,
  },
});
