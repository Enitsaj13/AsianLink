import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

/* --- user screens --- */
import Login from '@src/screens/User/Login'
import Registration from '@src/screens/User/Registration'


/* --- stack type --- */
export type RootStackParamList = {
    Login: undefined
    Registration: undefined
}

/* --- home stack --- */
const Stack = createStackNavigator<RootStackParamList>()


const UserStack = ({ navigation }: any) => {
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
        </Stack.Navigator>
    )
}

export default UserStack