
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Header({ onOpenMenu }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.brand}>Andina Tech & Hogar</Text>
        <Text style={styles.subtitle}>Tecnología para tu hogar</Text>
      </View>

      <Pressable
        style={styles.menuButton}
        onPress={onOpenMenu}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#123B5D',
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#DCEAF4',
    fontSize: 12,
    marginTop: 3,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    color: '#FFFFFF',
    fontSize: 28,
  },
});
