import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import Slider from '@react-native-community/slider';

export default function App() {
  const [loaded] = useFonts({
    DrawveticaMini: require('./assets/fonts/DrawveticaMini.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ZOMBOJI</Text>
      <View style={styles.canvas}>
        <Image style={styles.img} resizeMode='contain' source={require('./assets/images/zomboji-1.png')} />
        <Image style={styles.img} resizeMode='contain' source={require('./assets/images/zomboji-2.png')} />
        <Image style={styles.img} resizeMode='contain' source={require('./assets/images/zomboji-12.png')} />
        <Image style={styles.img} resizeMode='contain' source={require('./assets/images/zomboji-8.png')} />
      </View>
      <View style={styles.sliderWrapper}>
        <Text style={styles.sliderLabel}>
          Head
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={4}
          minimumTrackTintColor="lightgray"
          maximumTrackTintColor="lightgray"
          step={1}
        />
      </View>
      <View style={styles.sliderWrapper}>
        <Text style={styles.sliderLabel}>
          Eyes
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={4}
          minimumTrackTintColor="lightgray"
          maximumTrackTintColor="lightgray"
          step={1}
        />
      </View>
      <View style={styles.sliderWrapper}>
        <Text style={styles.sliderLabel}>
          Nose
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={4}
          minimumTrackTintColor="lightgray"
          maximumTrackTintColor="lightgray"
          step={1}
        />
      </View>
      <View style={styles.sliderWrapper}>
        <Text style={styles.sliderLabel}>
          Beard
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={4}
          minimumTrackTintColor="lightgray"
          maximumTrackTintColor="lightgray"
          step={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 48,
    fontFamily: 'DrawveticaMini',
    color: 'black',
    marginTop: 70
  },
  canvas: {
    width: 380,
    height: 527,
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 380,
    height: 527,
  },
  sliderWrapper: {
    width: '80%',
    flexDirection: 'row',
    // paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderLabel: {
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'DrawveticaMini',
    color: 'black',
    marginRight: 10,
  },
  slider: {
    height: 10,
    width: 250,
    marginRight: 10,
  }
});
