
import React from 'react';
import { View, StyleSheet } from 'react-native';

import IndexScreen from '../screens/IndexScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import UsersScreen from '../screens/UsersScreen';

export default function WorkArea({
  activeScreen,
  isAuthenticated,
  onNavigate,
}) {
  function renderScreen() {
    switch (activeScreen) {
      case 'Registro':
        return (
          <RegisterScreen
            onSuccess={() => onNavigate('Login')}
          />
        );

      case 'Login':
        return (
          <LoginScreen
            onSuccess={() => onNavigate('Usuarios')}
          />
        );

      case 'Usuarios':
        if (!isAuthenticated) {
          return (
            <LoginScreen
              onSuccess={() => onNavigate('Usuarios')}
            />
          );
        }

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
