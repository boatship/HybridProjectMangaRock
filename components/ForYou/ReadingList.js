import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class ReadingList extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Card
                    containerStyle={{
                        height: 245,
                        width: 300,
                        marginRight: -5,
                    }}
                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 15 , fontWeight:'bold'}}>Short Tales of Horror</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Don't let the briefness of these series fools</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>you. Strong essences are kept in small bott...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/UgetsuMonogatari.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/KyoukotsuNoYume.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/Hanako.webp')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 , fontWeight:'bold'}}>VIEW NOW</Text>

                        </View>
                    </View>


                </Card>

                <Card
                    containerStyle={{
                        height: 245,
                        width: 300,
                        marginRight: -5,
                    }}
                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 15 , fontWeight:'bold'}}>Romantic Series That Will Make You ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Years ago, two lovers have vowed to love</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>each other for eternity. Even in their next lif...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/TimeLover.png')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/PhoenixNirvana.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/AJourney.jpg')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 , fontWeight:'bold'}}>VIEW NOW</Text>

                        </View>
                    </View>


                </Card>

                <Card
                    containerStyle={{
                        height: 245,
                        width: 300,
                        marginRight: -5,
                    }}
                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 15 , fontWeight:'bold'}}>Incredible Super Power Series ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>When you see people on your everyday</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>commute, you most likely don't pay much a...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/CultivationChatGroup.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/SchoolBeauty.png')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/VersatileMage.jpg')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 , fontWeight:'bold'}}>VIEW NOW</Text>

                        </View>
                    </View>
                </Card>
            </ScrollView>
        );
    }
}

//make this component available to the app
export default ReadingList;
