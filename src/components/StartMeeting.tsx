import {
  StyleSheet,
  Text,
  // TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

interface StartMeetingProps {
  // name: string;
  // onNameChange: (textInput: string) => void;
  // roomId: string;
  // onRoomChange: (textInput: string) => void;
  onStartVideoCall: () => void;
}

const StartMeeting = ({
  // name,
  // onNameChange,
  // roomId,
  // onRoomChange,
  onStartVideoCall,
}: StartMeetingProps) => {
  return (
    <View style={styles.meetingContainer}>
      {/* <View style={styles.meetingInfo}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter Name"
          placeholderTextColor="#767476"
          onChangeText={text => onNameChange(text)}
        />
      </View>
      <View style={styles.meetingInfo}>
        <TextInput
          style={styles.input}
          value={roomId}
          placeholder="Enter Room Id"
          placeholderTextColor="#767476"
          onChangeText={text => onRoomChange(text)}
        />
      </View> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onStartVideoCall}>
          <Text style={styles.buttonText}>Start Video Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meetingContainer: {},
  meetingInfo: {
    height: 50,
    width: '100%',
    backgroundColor: '#373538',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#484648',
    padding: 12,
  },
  input: {
    fontSize: 18,
    color: '#ffffff',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0470DC',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default StartMeeting;
