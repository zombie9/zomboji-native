import { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Context } from '../context/Context';

const Customizer = () => {
  const { config, setConfig } = useContext(Context);
  const [currentGroup, setCurrentGroup] = useState(1);
  const { layers } = config;
  const currentLayer = layers[currentGroup - 1];
  // const handleSelectGroup =
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
      <View style={{ ...styles.selectorRow, marginBottom: 16 }}>
        {layers.map(layer => {
          const { name, key } = layer;
          return (
            <TouchableOpacity
              style={{
                ...styles.selector,
                borderColor: key === currentGroup ? 'black' : 'darkgray'
              }}
              key={`selector-${key}`}
              onPress={() => setCurrentGroup(key)}>
              <Text
                style={{
                  ...styles.label,
                  color: key === currentGroup ? 'black' : 'darkgray'
                }}>
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.selectorRow}>
        {currentLayer.options.map(option => {
          const { id } = option;
          return (
            <TouchableOpacity
              style={{
                ...styles.selector,
                borderColor:
                  currentLayer.selected === option.id ? 'black' : 'darkgray'
              }}
              key={id}
              onPress={() =>
                handleChange({ value: option.id, key: currentLayer.key })
              }>
              <Text
                style={{
                  ...styles.label,
                  color:
                    currentLayer.selected === option.id ? 'black' : 'darkgray'
                }}>{`${currentLayer.name}-${id}`}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'DrawveticaMini'
  },
  selector: {
    padding: 10,
    borderWidth: 1
  },
  selectorRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10
  }
});

export default Customizer;
