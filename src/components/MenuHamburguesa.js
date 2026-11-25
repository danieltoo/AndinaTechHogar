
import React from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function MenuHamburguesa({
  visible,
  onClose,
  onNavigate,
}) {
  const opciones = [
    { texto: 'Inicio', pantalla: 'Inicio' },
    { texto: 'Registro', pantalla: 'Registro' },
    { texto: 'Iniciar sesión', pantalla: 'Login' },
    { texto: 'Usuarios registrados', pantalla: 'Usuarios' },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.fondo}>
        <View style={styles.menu}>
          <Text style={styles.titulo}>Menú</Text>

          {opciones.map((opcion) => (
            <Pressable
              key={opcion.pantalla}
              style={styles.opcion}
              onPress={() => {
                onNavigate(opcion.pantalla);
                onClose();
              }}
            >
              <Text style={styles.texto}>
                {opcion.texto}
              </Text>
            </Pressable>
          ))}

          <Pressable
            style={styles.cerrar}
            onPress={onClose}
          >
            <Text style={styles.textoCerrar}>Cerrar menú</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    flexDirection: 'row',
  },
  menu: {
    width: 280,
    backgroundColor: '#FFFFFF',
    padding: 22,
    paddingTop: 55,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#123B5D',
    marginBottom: 20,
  },
  opcion: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  texto: {
    fontSize: 16,
    color: '#263746',
  },
  cerrar: {
    marginTop: 25,
    backgroundColor: '#123B5D',
    padding: 12,
    borderRadius: 8,
  },
  textoCerrar: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
