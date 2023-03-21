import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../interfaces/navigation';

import Home from '../screens/Home';
import VideoCall from '../screens/VideoCall';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Video"
          component={VideoCall}
          options={{
            title: 'Video Call',
            headerStyle: {
              backgroundColor: '#1c1c1c',
            },
            headerTintColor: '#ffffff',
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            // headerBackTitleVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
