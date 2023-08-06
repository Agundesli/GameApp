import React from 'react';
import { Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { default as logo } from '../assets/images/misc/login.png';
import { default as google } from '../assets/images/misc/google.png';
import { default as facebook } from '../assets/images/misc/facebook.png';
import { default as twitter } from '../assets/images/misc/twitter.png';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>

                <View style={{ alignItems: 'center' }}>
                    <Image source={logo} style={{ height: 180, width: 310, transform: [{ rotate: '-10deg' }] }} />
                </View>

                <Text style={{
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 30,
                    marginTop: 50,
                    marginStart: 10
                }}>
                    Login
                </Text>

                <InputField
                    label={'Email ID'}
                    icon={
                        <MaterialIcon
                            name='at'
                            size={20}
                            color="#666"
                            style={{ marginRight: 5, marginTop: 3 }} />
                    }
                    keyboardType="email-address"

                />

                <InputField
                    label={'Password'}
                    icon={
                        <MaterialIcon
                            name='lock'
                            size={20}
                            color="#666"
                            style={{ marginRight: 5, marginTop: 3 }} />
                    }
                    inputType="password"
                    keyboardType="password"
                    fieldButtonLabel={"Forgot?"}
                    fieldButtonFunction={() => { }}
                />

                <CustomButton label={"Login"} onPress={() => { }} />


                <Text style={{
                    textAlign: 'center',
                    color: '#666',
                    marginBottom: 30
                }}>Or, login with...</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 30
                }}>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            borderWidth: 2,
                            borderColor: '#ddd',
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}>
                        <Image source={google} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            borderWidth: 2,
                            borderColor: '#ddd',
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}>
                        <Image source={facebook} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            borderWidth: 2,
                            borderColor: '#ddd',
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}>
                        <Image source={twitter} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text>New to the app? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Register</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>

    )
}

export default LoginScreen;