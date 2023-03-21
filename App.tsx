// import type {PropsWithChildren} from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation/Navigation';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
