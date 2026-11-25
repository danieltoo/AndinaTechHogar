
import React from 'react';
import { View, StyleSheet } from 'react-native';

import IndexScreen from '../screens/IndexScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import UsersScreen from '../screens/UsersScreen';

export default function WorkArea({ activeScreen }) {
  function renderScreen() {
    switch (activeScreen) {
      case 'Registro':
        return <RegisterScreen />;

      case 'Login':
        return <LoginScreen />;

      case 'Usuarios':
        return <UsersScreen />;

      case 'Inicio':
      default:
        return <IndexScreen />;
    }
  }

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
});
