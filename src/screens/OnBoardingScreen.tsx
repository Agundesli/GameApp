import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialalIcons from 'react-native-vector-icons/MaterialIcons';
import { default as logo } from '../assets/images/misc/game.png';


const OnBoardingScreen = ({ navigation }: any) => {
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
                onPress={() => navigation.navigate('Login')}
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
export default OnBoardingScreen;