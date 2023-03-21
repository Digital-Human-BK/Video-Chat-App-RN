import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../components/Header';
import Contacts from '../components/Contacts';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';

const Home = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: top + 15,
          paddingBottom: bottom + 15,
          paddingLeft: left + 15,
          paddingRight: right + 15,
        },
      ]}>
      <Header />
      <SearchBar />
      <MenuButtons />
      <Contacts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
});

export default Home;
