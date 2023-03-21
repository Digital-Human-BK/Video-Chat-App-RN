import { useState } from 'react';
import { View } from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';
import StartMeeting from '../components/StartMeeting';

const VideoCall = (): JSX.Element => {
  const [videoCall, setVideoCall] = useState<boolean>(false);

  const connectionData = {
    appId: '55ad867f5dce4c2c814420dcbcddd99f',
    channel: 'test',
    token:
      '007eJxTYLioplFXtdpqXcGHXXuYFmUG1B/Qz1xx+vTLhAneH09VTUpRYDA1TUyxMDNPM01JTjVJNkq2MDQxMTJISU5KTklJsbRMK7wikdIQyMhwQu09CyMDBIL4LAwlqcUlDAwA6rEiGg==',
  };

  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <View style={{ backgroundColor: '#1c1c1c', flex: 1 }}>
      <StartMeeting onStartVideoCall={() => setVideoCall(true)} />
    </View>
  );
};

export default VideoCall;
