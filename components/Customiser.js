import Slider from '@react-native-community/slider';
import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Context } from './context/Context';

const Customiser = () => {
  const { config, setConfig } = useContext(Context);
  const { layers } = config;

  const handleChange = ({ value, key }) => {
    setConfig(prev => {
      return {
        // ...prev,
        layers: prev.layers.map((layer, index) => {
          if (key - 1 !== index) return layer;
          return {
            ...layer,
            selected: value
          };
        })
      };
    });
  };
  return (
    <>
      {layers.map(layer => {
        const { name, key, options, selected } = layer;
        return (
          <View style={styles.sliderWrapper} key={key}>
            <Text style={styles.sliderLabel}>{name}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={options.length}
              minimumTrackTintColor="lightgray"
              maximumTrackTintColor="lightgray"
              step={1}
              value={selected}
              onValueChange={value => handleChange({ value, key })}
            />
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sliderLabel: {
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'DrawveticaMini',
    color: 'black',
    marginRight: 10
  },
  slider: {
    height: 10,
    width: 250,
    marginRight: 10
  }
});

export default Customiser;
