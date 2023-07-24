import React from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import Feather from 'react-native-vector-icons/MaterialIcons';
import { sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';

export default function HomeScreen() {
    const renderBanner = ({ item, index }: any) => {
        return <BannerSlider data={item} />
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Roboto-Medium',
                        marginTop: 4
                    }}>Hello Heisenberg</Text>
                    <ImageBackground source={require('../assets/images/user-profile.jpg')}
                        style={{ width: 35, height: 35 }}
                        imageStyle={{ borderRadius: 25 }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderColor: '#C6C6C6',
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                }}>
                    <Feather
                        name="search"
                        size={30}
                        color="#C6C6C6"
                        style={{
                            margin: 5,
                            marginTop: 10,
                        }}
                    />
                    <TextInput placeholder='Search' />
                    
                </View>

                <View style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'Roboto-Medium'
                    }}>Upcoming Games</Text>

                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{
                            color: '#0aada8',
                            marginTop: 5
                        }}>See All</Text>
                    </TouchableOpacity>
                </View>

                <Carousel
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                />

            </ScrollView>
        </SafeAreaView>
    )
}