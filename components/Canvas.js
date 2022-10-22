import { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Context } from "../context/Context";

const Canvas = () => {
  const { config } = useContext(Context);
  const { layers } = config;
  return (
    <View style={styles.canvas}>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={require("../assets/images/zomboji-1.png")}
      />
      {layers.map((layer) => {
        const { selected, options, key } = layer;
        if (selected < 1) return null;
        const option = options.find(
          (opt) => opt.id === selected
        );
        return (
          <Image
            key={key}
            style={{...styles.img, zIndex: option.zindex}}
            resizeMode="contain"
            source={option.uri}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    width: 380,
    height: 527,
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 380,
    height: 527,
  },
});

export default Canvas;
