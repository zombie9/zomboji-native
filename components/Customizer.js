import { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Context } from '../context/Context';
import RandomReset from './RandomReset';

const Customizer = () => {
  const { config, setConfig } = useContext(Context);
  const [currentGroup, setCurrentGroup] = useState(1);
  const { layers } = config;
  const currentLayer = layers[currentGroup - 1];

  const handleChange = ({ value, key }) => {
    setConfig(prev => {
      return {
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
        {layers.map((layer, index) => {
          const { name, key } = layer;
          return (
            <TouchableOpacity
              style={{
                ...styles.selector,
                borderRightWidth:
                  index === currentLayer.options.length - 1 ||
                  key === currentGroup
                    ? 1
                    : 0,
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
        {currentLayer.options.map((option, index) => {
          const { id } = option;
          return (
            <TouchableOpacity
              style={{
                ...styles.selector,
                paddingVertical: 20,
                borderRightWidth:
                  index === currentLayer.options.length - 1 ||
                  currentLayer.selected === option.id
                    ? 1
                    : 0,
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
                }}>{`${currentLayer.name} ${id + 1}`}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <RandomReset />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    lineHeight: 18,
    fontFamily: 'DrawveticaMini',
    alignSelf: 'center'
  },
  selector: {
    flex: 1,
    padding: 10,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  selectorRow: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10
  }
});

export default Customizer;
