import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AppStack from './appStack'
import AuthStack from './authSatck'

function AppNav() {

    const { isLoading, userToken } = useContext(AuthContext)

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }


    return (
        <NavigationContainer>

            {userToken !== null ? <AppStack /> : <AuthStack />}

        </NavigationContainer>
    );
};

export default AppNav;