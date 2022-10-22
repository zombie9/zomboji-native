import { useFonts } from 'expo-font';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Canvas from './components/Canvas';
import Customizer from './components/Customizer';
import Header from './components/Header';
import { Context } from './context/Context';
import { initState } from './data/initState';

export default function App() {
  const [config, setConfig] = useState(initState);
  const [loaded] = useFonts({
    DrawveticaMini: require('./assets/fonts/DrawveticaMini.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <Context.Provider value={{ config, setConfig }}>
      <View style={styles.container}>
        <Header title="ZOMBOJI" />
        <Canvas />
        <Customizer />
      </View>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
