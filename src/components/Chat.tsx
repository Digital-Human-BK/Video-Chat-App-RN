import { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import ChatHeader from './ChatHeader';

type ChatProps = {
  modalVisible: boolean;
  onClose: () => void;
};

const Chat = ({ onClose }: ChatProps) => {
  const [message, setMessage] = useState<string>('');
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <ChatHeader onClose={onClose} />
            <View style={styles.chatMessages} />
            <View style={styles.chatFormContainer}>
              <Text style={{ color: '#ffffff' }}>Send to: Everyone</Text>
              <View style={styles.chatForm}>
                <TextInput
                  value={message}
                  onChangeText={text => setMessage(text)}
                  style={styles.textInput}
                  placeholder="Tap here to chat"
                  placeholderTextColor="#595859"
                />
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor: message ? '#0b71eb' : '#373838',
                  }}>
                  <FontAwesome name="send" size={18} color="#efefef" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  chatMessages: {
    flex: 1,
  },
  chatFormContainer: {
    borderColor: '#2f2f2f',
    borderTopWidth: 1,
    padding: 12,
  },
  chatForm: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    height: 40,
    color: '#efefef',
    borderColor: '#595859',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
  },
  button: {
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
