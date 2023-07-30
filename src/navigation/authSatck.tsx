import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='OnBoarding' component={OnBoardingScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
    );
};


export default AuthStack;