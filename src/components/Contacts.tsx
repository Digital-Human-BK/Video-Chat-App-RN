import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ContactItems } from '../interfaces/menuItems';

const contactsMenuButtons: ContactItems = [
  {
    type: 'favorites',
    name: 'Favorites',
  },
  {
    type: 'contact',
    name: 'Soichiro Honda',
    image: require('../assets/honda.jpg'),
  },
  {
    type: 'contact',
    name: 'Hatake Kakashi',
    image: require('../assets/sharingan.jpg'),
  },
  {
    type: 'contact',
    name: 'Disturbed',
    image: require('../assets/disturbed.jpg'),
  },
];

const Contacts = () => {
  return (
    <View style={styles.container}>
      {/* Contact Container */}
      {contactsMenuButtons.map((contact, index) => (
        <View key={contact.type + index} style={styles.row}>
          {/* Image */}
          {contact.type === 'favorites' ? (
            <View style={styles.starIcon}>
              <Ionicons name="bug-sharp" size={30} color="#efefef" />
            </View>
          ) : (
            <Image
              source={contact.image!}
              style={styles.image}
              resizeMode="cover"
            />
          )}

          {/* Text Title */}
          <Text style={styles.titleText}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  starIcon: {
    width: 55,
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#f1f1f1',
  },
});

export default Contacts;
