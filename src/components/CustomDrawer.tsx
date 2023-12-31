import React, {useContext} from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";


import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../context/AuthContext';
const CustomDrawer = (props: any) => {

    const {logout} = useContext(AuthContext)
    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props}
                contentContainerStyle={{
                    backgroundColor: '#8200d6'
                }} >
                <ImageBackground
                    source={require('../assets/images/menu-bg.jpeg')}
                    style={{ padding: 20 }}>

                    <Image
                        source={require('../assets/images/user-profile.jpg')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />

                    <Text style={{ color: '#fff', fontSize: 18 }}>Heisenberg </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#fff', fontSize: 14 }}>280 Coins </Text>
                        <MaterialCommunityIcons name="bitcoin" size={20} color="#fff" />
                    </View>

                </ImageBackground>

                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10, }}>

                    <DrawerItemList {...props} />

                </View>

            </DrawerContentScrollView>

            <View style={{ padding: 10, borderTopWidth: 2, borderTopColor: '#ccc' }}>

                <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="share-social-outline" size={22} color={'#333'} />
                        <Text style={{fontSize:15, marginLeft:5, color:'#333'}}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {logout()}} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="exit-outline" size={22} color={'#333'} />
                        <Text style={{fontSize:15, marginLeft:5, color:'#333'}}>SignOut</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>


    );
};



export default CustomDrawer;