
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

const productos = [
  {
    id: '1',
    nombre: 'Audífonos inalámbricos',
    descripcion: 'Disfruta de la mejor musica con la mejor calidad de sonido sin enrredos.',
    precio: '$89.900',
    imagen:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700',
  },
  {
    id: '2',
    nombre: 'Parlante Bluetooth',
    descripcion: 'Disfruta tu música en cualquier lugar con nuestro parlante con sonido de calidad.',
    precio: '$129.900',
    imagen:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700',
  },
  {
    id: '3',
    nombre: 'Reloj inteligente',
    descripcion: 'Revisa la hora en la que cambia tu vida.',
    precio: '$159.900',
    imagen:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700',
  },
];

export default function IndexScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Bienvenido a Andina Tech & Hogar
      </Text>

      <Text style={styles.subtitulo}>
        Explora nuestros productos
      </Text>

      {productos.map((producto) => (
        <View key={producto.id} style={styles.card}>
          <Image
            source={{ uri: producto.imagen }}
            style={styles.imagen}
            resizeMode="cover"
          />

          <Text style={styles.nombre}>
            {producto.nombre}
          </Text>

          <Text style={styles.descripcion}>
            {producto.descripcion}
          </Text>

          <Text style={styles.precio}>
            {producto.precio}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#123B5D',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#536575',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  imagen: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#EAF1F6',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#123B5D',
  },
  descripcion: {
    color: '#64748B',
    marginTop: 6,
  },
  precio: {
    color: '#167044',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
