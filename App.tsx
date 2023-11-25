import React, {Component} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './src/navigation/AppStack';
import {navigationRef} from './src/navigation/Navigator';
import {NativeBaseProvider} from 'native-base';
export class App extends Component<any, any> {
  render() {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider>
          <NavigationContainer
            theme={{colors: {background: '#000'}}}
            ref={navigationRef}>
            <AppStack />
          </NavigationContainer>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    );
  }
}

export default App;
