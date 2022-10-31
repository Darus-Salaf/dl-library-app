import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './utils/Navigations'
import { Provider as PaperProvider } from 'react-native-paper'
import { NativeBaseProvider } from 'native-base'
import AppContext from './utils/context'

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 2000)

export default function App() {
  return (
    <NativeBaseProvider>
      <PaperProvider>
        <AppContext>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </AppContext>
      </PaperProvider>
    </NativeBaseProvider>
  )
}
