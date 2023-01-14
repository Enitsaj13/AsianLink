import { NavigationContainer } from '@react-navigation/native'
import FocusedStatusBar from '@src/components/FocusedStatusBar'

/* --- main navigator --- */
import RootNavigator from '@src/navigations/RootNavigator'

const App = () => {

  return (
    <NavigationContainer>
      <FocusedStatusBar barStyle='light-content' />
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App

