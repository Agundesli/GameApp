import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import ProfileScren from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingScreen from '../screens/SettingScreen';
import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor:'#aa18ea',
                drawerActiveTintColor:'#fff',
                drawerInactiveTintColor:'#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15
                }
            }}>
                
            <Drawer.Screen name='HomeScreen' component={TabNavigator} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='home-outline' size={22} color={color} />
                )
            }} />

            <Drawer.Screen name='ProfileScreen' component={ProfileScren} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='person-outline' size={22} color={color} />
                )
            }} />

            <Drawer.Screen name='MessagesScreen' component={MessagesScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
                )
            }} />

            <Drawer.Screen name='MomentsScreen' component={MomentsScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='timer-outline' size={22} color={color} />
                )
            }} />

            <Drawer.Screen name='SettingScreen' component={SettingScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name='settings-outline' size={22} color={color} />
                )
            }} />

        </Drawer.Navigator>
    );
};

export default AuthStack;

