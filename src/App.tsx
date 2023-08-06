import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from '../src/navigation/appStack'
import AuthStack from '../src/navigation/authSatck'


const App = () => {
    return (
        <NavigationContainer>
            {/* <AppStack /> */}
            <AuthStack/>
        </NavigationContainer>
    );
}

export default App;