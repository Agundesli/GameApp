import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { default as registration } from '../assets/images/misc/registration.png';
import { default as google } from '../assets/images/misc/google.png';
import { default as facebook } from '../assets/images/misc/facebook.png';
import { default as twitter } from '../assets/images/misc/twitter.png';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

const RegisterScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [dobLabel, setDobLabel] = useState('Date of Birth');

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 25 }}>


                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={registration}
                        style={{
                            height: 180,
                            width: 310,
                            marginTop: 8,
                            transform: [{ rotate: '-10deg' }]
                        }} />
                </View>

                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 15,
                        marginTop: 50,
                        marginStart: 10
                    }}>
                    Register
                </Text>

                <View
                    style={{
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

                <Text style={{
                    textAlign: 'center',
                    color: '#666',
                    marginBottom: 20
                }}>
                    Or, register with email ...
                </Text>

                <InputField
                    label={'Full Name'}
                    icon={
                        <MaterialIcon
                            name="account"
                            size={22}
                            color="#666"
                            style={{ marginRight: 5, marginTop: 1 }}
                        />
                    }
                    keyboardType="fullname"
                    value={""}
                    onChangeText={""}
                />

                <InputField
                    label={'Email ID'}
                    icon={
                        <MaterialIcon
                            name="at"
                            size={22}
                            color="#666"
                            style={{ marginRight: 5, marginTop: 2 }}
                        />
                    }
                    keyboardType="email-address"
                    value={""}
                    onChangeText={""}
                />

                <InputField
                    label={'Password'}
                    icon={
                        <MaterialIcon
                            name="lock"
                            size={22}
                            color="#666"
                            style={{ marginRight: 5, marginTop: 2 }}
                        />
                    }
                    inputType="password"
                    keyboardType="password"
                    value={""}
                    onChangeText={""}
                />

                <InputField
                    label={'Confirm Password'}
                    icon={
                        <MaterialIcon
                            name="lock"
                            size={22}
                            color="#666"
                            style={{ marginRight: 5, marginTop: 2 }}
                        />
                    }
                    inputType="password"
                    keyboardType="password"
                    value={""}
                    onChangeText={""}
                />

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    marginBottom: 25,
                }}>
                    <MaterialIcon
                        name='calendar-range'
                        size={22}
                        color="#666"
                        style={{ marginRight: 5, marginTop: 5 }} />
                    <TouchableOpacity
                        onPress={() => setOpen(true)}>
                        <Text style={{
                            color: '#666',
                            marginLeft: 5,
                            marginTop: 5
                        }}>
                            {dobLabel}
                        </Text>
                    </TouchableOpacity>
                    
                </View>

                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode={'date'}
                    maximumDate={new Date('2005-01-01')}
                    minimumDate={new Date('1980-01-01')}
                    onConfirm={date => {
                        setOpen(false);
                        setDate(date);
                        setDobLabel(date.toDateString());
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                />
                <CustomButton label={'Register'} onPress={() => { }} />


                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Already registered?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Login</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SafeAreaView>

    )
}

export default RegisterScreen;