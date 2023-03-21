import { View, StyleSheet, TextInput } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        // value=""
        autoCapitalize="none"
        placeholderTextColor="#858585"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#333',
  },
  searchInput: {
    flex: 1,
    color: '#f1f1f1',
    paddingLeft: 10,
    lineHeight: 0,
    fontSize: 20,
  },
});

export default SearchBar;
