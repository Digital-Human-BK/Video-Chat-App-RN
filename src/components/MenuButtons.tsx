import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MenuItems } from '../interfaces/menuItems';
import { RootStackParamList } from '../interfaces/navigation';

const menuItems: MenuItems = [
  {
    id: 1,
    iconName: 'videocam',
    title: 'Video Call',
    customColor: '#25D366',
  },
  {
    id: 2,
    iconName: 'call',
    title: 'Voice Call',
    customColor: '#7E57C2',
  },
  {
    id: 3,
    iconName: 'md-chatbox-ellipses',
    title: 'Chat',
    customColor: '#0470DC',
  },
  {
    id: 4,
    iconName: 'person-add-sharp',
    title: 'Join',
    customColor: '#FBC02D',
  },
];

const MenuButtons = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      {menuItems.map(item => (
        <View key={item.id} style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Video')}
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : '#0470DC',
            }}>
            <Ionicons name={item.iconName} size={25} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: '#1F1F1F',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: '#858585',
    fontSize: 12,
    paddingTop: 10,
    fontWeight: '600',
  },
});

export default MenuButtons;
