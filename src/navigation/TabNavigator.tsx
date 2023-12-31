import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailScreen from '../screens/GameDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false
                }} />

            <Stack.Screen
                name='GameDetails'
                component={GameDetailScreen}
                options={({ route }) => ({
                    title: route.params?.title,
                    headerTitleAlign: 'center',
                })} />

        </Stack.Navigator>
    );
};


const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: '#AD40AF' },
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: 'yellow',
        }}>

            <Tab.Screen name='HomeScreen' component={HomeStack} options={({route}:any) =>({
                tabBarStyle:{display: getTabBarVisibility(route), backgroundColor:'#AD40AF'},
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='home-outline' color={color} size={size} />
                ),
            })}  />

            <Tab.Screen name='CardScreen' component={CardScreen} options={{
                tabBarBadge: 3,
                tabBarBadgeStyle: { backgroundColor: 'yellow' },
                tabBarIcon: ({ color, size }) => (
                    <Feather name='shopping-bag' color={color} size={size} />
                )
            }} />

            <Tab.Screen name='FavoriteScreen' component={FavoriteScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name='heart' color={color} size={size} />
                )
            }} />

        </Tab.Navigator>
    )

};

const getTabBarVisibility = (route:any) =>{
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if(routeName=='GameDetails') {
        return 'none';
    }
    return 'flex';
};

export default TabNavigator;