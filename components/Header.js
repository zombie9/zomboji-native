import { StyleSheet, Text } from 'react-native';

const Header = ({ title }) => {
  return <Text style={styles.heading}>{title}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: 'DrawveticaMini',
    color: 'black',
    marginTop: 70
  }
});

export default Header;
