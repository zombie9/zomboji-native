import { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { Context } from '../context/Context';
import { initState } from '../data/initState';

const RandomReset = () => {
  const { config, setConfig } = useContext(Context);
  console.log('config.layers.length', config.layers.length);
  console.log(Math.floor(Math.random() * config.layers.length));
  const handleRandom = () => {
    setConfig(prev => {
      return {
        layers: prev.layers.map(layer => {
          return {
            ...layer,
            selected: Math.floor(Math.random() * prev.layers.length)
          };
        })
      };
    });
  };

  const handleReset = () => {
    setConfig(initState);
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={() => handleRandom()}>
        <Text style={styles.label}>random</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleReset()}>
        <Text style={styles.label}>reset all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 16,
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  label: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'DrawveticaMini',
    alignSelf: 'center'
  }
});

export default RandomReset;
