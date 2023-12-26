import {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from '@events/framework/presentation/store/store';
import {PaperProvider} from 'react-native-paper';
type defaultProps = {};

function Setup({children}: PropsWithChildren<defaultProps>) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default Setup;
