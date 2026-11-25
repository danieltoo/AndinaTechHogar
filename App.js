
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Header from './src/components/Header';
import MenuHamburguesa from './src/components/MenuHamburguesa';
import NavBar from './src/components/NavBar';
import WorkArea from './src/components/WorkArea';
import Footer from './src/components/Footer';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('Inicio');
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.safeArea}>
      <View style={styles.app}>
        <Header
          onOpenMenu={() => setMenuVisible(true)}
        />

        <MenuHamburguesa
          visible={menuVisible}
          onClose={() => setMenuVisible(false)}
          onNavigate={setActiveScreen}
        />

        <NavBar
          onNavigate={setActiveScreen}
        />

        <WorkArea
          activeScreen={activeScreen}
        />

        <Footer />
      </View>
    </View>
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
});
