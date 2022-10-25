import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useContext, useRef } from 'react';
import { Share, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';

import { Context } from '../context/Context';

const Canvas = () => {
  const { config } = useContext(Context);
  const { layers } = config;

  const viewShot = useRef();
  const captureAndShare = async () => {
    const uri = await viewShot.current.capture();
    Share.share({ title: 'zomboji', url: uri });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.shareButton}
        onPress={() => captureAndShare()}>
        <Ionicons name="share-outline" size={40} color="gray" />
      </TouchableOpacity>
      <ViewShot options={{ format: 'jpg', quality: 0.9 }} ref={viewShot}>
        <View style={styles.canvas}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../assets/images/zomboji-1.png')}
          />
          {layers.map(layer => {
            const { selected, options, key } = layer;
            if (selected < 1) return null;
            const option = options.find(opt => opt.id === selected);
            return (
              <Image
                key={key}
                style={{ ...styles.img, zIndex: option.zindex }}
                resizeMode="contain"
                source={option.uri}
              />
            );
          })}
        </View>
      </ViewShot>
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    width: 380,
    height: 527
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 380,
    height: 527
  },
  shareButton: {
    position: 'absolute',
    bottom: 24,
    right: 8,
    padding: 4,
    zIndex: 999
  }
});

export default Canvas;
