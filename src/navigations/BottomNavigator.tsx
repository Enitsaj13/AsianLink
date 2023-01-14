import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

/* --- screen stack navigator --- */
import Login from '@src/screens/User/Login'
import Home from '@src/navigations/HomeStack'
import User from '@src/navigations/UserStack'

/* --- tab type --- */
export type RootTabParamList = {
    Login: { screen: string }
    Home: { screen: string }
    User: { screen: string }
}

/* --- tab navigator --- */
const Tab = createBottomTabNavigator<RootTabParamList>()

const MainNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#0ea5e9',
                tabBarInactiveTintColor: '#b8bece',
            }}
        >
            <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='user' color={color} size={size} />
                    ),
                }}
            />


            <Tab.Screen
                name='User'
                component={User}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='user' color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='home' color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

export default MainNavigator