import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './appStack'
import AuthStack from './authSatck'
import { AuthContext } from '../context/AuthContext';


function AppNav() {

    const { isLoading, userToken } = useContext(AuthContext)

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    console.log("appnaw"+" "+userToken)

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack />}

        </NavigationContainer>
    );
};

export default AppNav;