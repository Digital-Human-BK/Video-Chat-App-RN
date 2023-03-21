import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="notifications" size={30} color="#efefef" />
      <Text style={styles.heading}>Meet & Chat</Text>
      <Ionicons name="menu" size={35} color="#efefef" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    color: '#efefef',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Header;
