import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

/* --- product screens --- */
import Login from '@src/screens/User/Login'
import Registration from '@src/screens/User/Registration'
import BottomNavigator from '@src/navigations/BottomNavigator'

/* --- stack type --- */
export type RootStackParamList = {
    Login: undefined
    Registration: undefined
    BottomNavigator: undefined
}

/* --- home stack --- */
const Stack = createStackNavigator<RootStackParamList>()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Stack.Screen name='Registration' component={Registration}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Stack.Screen name='BottomNavigator' component={BottomNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
        </Stack.Navigator>

    )
}

export default HomeStack