import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialalIcons from 'react-native-vector-icons/MaterialIcons';
import { default as logo } from './assets/images/misc/game.png';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Main = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <View>
                <Text style={{
                    fontSize: 30,
                    marginTop: 25,
                    fontWeight: 'bold',
                    color: '#20315f',
                    fontFamily: 'Inter-Bold',
                }}>
                    GAMEON
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={logo}
                    style={{ transform: [{ rotate: '-15deg' }] }}
                />

            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{
                    backgroundColor: '#AD40AF',
                    padding: 20,
                    marginBottom: 50,
                    width: '90%',
                    borderRadius: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#fff',
                    fontFamily: 'Roboto-MediumItalic'
                }}>
                    Let's Begin
                </Text>
                <MaterialalIcons name='arrow-forward-ios' size={22} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>

    );
};

// const Home = () => {
//     return (
//         <View style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center'
//         }}>
//             <Text>Home Screen</Text>
//         </View>
//     );
// }

export default App;