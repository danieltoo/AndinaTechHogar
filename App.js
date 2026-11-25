
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Header from './src/components/Header';
import MenuHamburguesa from './src/components/MenuHamburguesa';
import NavBar from './src/components/NavBar';
import WorkArea from './src/components/WorkArea';
import Footer from './src/components/Footer';

import {
  AuthProvider,
  useAuth,
} from './src/context/AuthContext';

function AppContent() {
  const {
    session,
    loading,
    signOut,
  } = useAuth();

  const [activeScreen, setActiveScreen] = useState('Inicio');
  const [menuVisible, setMenuVisible] = useState(false);

  // Si la sesión termina, no dejar al usuario
  // en la pantalla privada
  useEffect(() => {
    if (!session && activeScreen === 'Usuarios') {
      setActiveScreen('Inicio');
    }
  }, [session, activeScreen]);

  function navigate(screen) {
    // Proteger la pantalla de usuarios
    if (screen === 'Usuarios' && !session) {
      setActiveScreen('Login');
      return;
    }

    setActiveScreen(screen);
  }

  async function handleLogout() {
    try {
      await signOut();
      setMenuVisible(false);
      setActiveScreen('Inicio');
    } catch (error) {
      console.log('Error cerrando sesión:', error.message);
    }
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Verificando sesión...</Text>
      </View>
    );
  }

  return (
    <View style={styles.safeArea}>
      <View style={styles.app}>
        <Header
          onOpenMenu={() => setMenuVisible(true)}
        />

        <MenuHamburguesa
          visible={menuVisible}
          onClose={() => setMenuVisible(false)}
          onNavigate={navigate}
          session={session}
          onLogout={handleLogout}
        />

        <NavBar
          onNavigate={navigate}
          session={session}
          onLogout={handleLogout}
        />

        <WorkArea
          activeScreen={activeScreen}
          isAuthenticated={!!session}
          onNavigate={navigate}
        />

        <Footer />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#123B5D',
  },
  app: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
