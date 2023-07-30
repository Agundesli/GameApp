import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import Feather from 'react-native-vector-icons/MaterialIcons';
import { freeGames, paidGames, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}:any) {

    const [gamestab, setGamesTab] = useState(1);

    const renderBanner = ({ item }: any) => {
        return <BannerSlider data={item} />
    }

    const onSelectSwitch = (value: number) => {
        setGamesTab(value);
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
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground source={require('../assets/images/user-profile.jpg')}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>

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

                <View style={{ marginVertical: 10 }}>
                    <CustomSwitch
                        selectionMode={1}
                        optionOne="Free to play"
                        optionTwo="Paid games"
                        onSelectSwitch={onSelectSwitch} />
                </View>

                {gamestab == 1 &&
                    freeGames.map(item => (
                        <ListItem
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subtitle={item.subtitle}
                            isFree={item.isFree}
                        />
                    ))}

                {gamestab == 2 &&
                    paidGames.map(item => (
                        <ListItem
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subtitle={item.subtitle}
                            isFree={item.isFree}
                            price={item.price}
                        />
                    ))}

            </ScrollView>
        </SafeAreaView>
    )
}