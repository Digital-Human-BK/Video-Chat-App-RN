import { Pressable, StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

type ChatHeaderProps = {
  onClose: () => void;
};

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <View style={[styles.container]}>
      <Pressable style={styles.button} onPress={onClose}>
        <Text style={styles.buttonText}>Close</Text>
      </Pressable>
      <Text style={styles.heading}>Chat</Text>
      <Entypo name="bell" size={25} color="#efefef" />
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {},
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
});
