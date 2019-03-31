import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

class FeatureTitles extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <Card
                    containerStyle={{
                        height: 325,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#635167'
                    }}
                    image={require('../../static/Manga/resentment-2.jpg')}>

                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 1 }}>

                                <Image
                                    style={{ width: 75, height: 115, marginBottom: 10, }}
                                    source={require('../../static/Manga/resentment.webp')}
                                />
                                <View style={{ borderTopColor: '#8D7593', borderTopWidth: 0.5, width: 275 }}>
                                    <Text style={{ color: 'white', marginTop: 5, fontWeight: 'bold' }}>READ NOW</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2.5, marginLeft: 10 }}>
                                <Text style={{ marginTop: 20, marginBottom: 10, color: 'white', fontWeight: 'bold', fontSize: 15 }}>
                                    Resentment
                                </Text>
                                <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                                    Horror,Drama,Supernatural
                                </Text>
                                <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                                    Ongoing · 6 chapters
                                </Text>
                                <Ionicons
                                    name="md-heart-empty"
                                    size={20}
                                    color="white"
                                    style={{ marginLeft: 145, marginTop: 47.5 }}
                                />
                                <Ionicons
                                    name="md-more"
                                    size={20}
                                    color="white"
                                    style={{ marginTop: -20, marginLeft: 185 }}
                                />
                            </View>

                        </View>
                    </View>

                    <LinearGradient
                        style={{ position: 'absolute', top: -50, bottom: 0, width: '107.125%', height: 50 }}
                        colors={['rgba(99, 81, 103, 0.1)', 'rgba(99, 81, 103, 1)']}
                        pointerEvents={'none'}
                    />
                </Card>

                <Card
                    containerStyle={{
                        height: 325,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#685D2A'
                    }}
                    image={require('../../static/Manga/samuraisho-2.jpg')}>

                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 1 }}>

                                <Image
                                    style={{ width: 75, height: 115, marginBottom: 10, }}
                                    source={require('../../static/Manga/samuraisho.jpg')}
                                />
                                <View style={{ borderTopColor: '#90813C', borderTopWidth: 0.25, width: 275 }}>
                                    <Text style={{ color: 'white', marginTop: 5, fontWeight: 'bold' }}>READ NOW</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2.5, marginLeft: 10 }}>
                                <Text style={{ marginTop: 20, marginBottom: 10, color: 'white', fontWeight: 'bold', fontSize: 15 }}>
                                    Samurai Shodown (Yuuki Miyoshi)
                                </Text>
                                <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                                    Historical, Martial Arts, Supernatu...
                                </Text>
                                <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                                    Completed · 6 chapters
                                </Text>
                                <Ionicons
                                    name="md-heart-empty"
                                    size={20}
                                    color="white"
                                    style={{ marginLeft: 145, marginTop: 30.5 }}
                                />
                                <Ionicons
                                    name="md-more"
                                    size={20}
                                    color="white"
                                    style={{ marginTop: -22, marginLeft: 185 }}
                                />
                            </View>

                        </View>
                    </View>

                    <LinearGradient
                        style={{ position: 'absolute', top: -50, bottom: 0, width: '107.125%', height: 50 }}
                        colors={['rgba(104, 93, 42, 0.1)', 'rgba(104, 93, 42, 1)']}
                        pointerEvents={'none'}
                    />
                </Card>

                <Card
                    containerStyle={{
                        height: 325,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Manga/segregated-2.jpg')}>

                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 1 }}>

                                <Image
                                    style={{ width: 75, height: 115, marginBottom: 10, }}
                                    source={require('../../static/Manga/segregated.png')}
                                />
                                <View style={{ borderTopColor: '#A3A3A3', borderTopWidth: 0.25, width: 275 }}>
                                    <Text style={{ color: 'white', marginTop: 5, fontWeight: 'bold' }}>READ NOW</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2.5, marginLeft: 10 }}>
                                <Text style={{ marginTop: 20, marginBottom: 10, color: 'white', fontWeight: 'bold', fontSize: 15 }}>
                                    Segregated World
                                </Text>
                                <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                                    Fantasy, Adventure, Action
                                </Text>
                                <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                                    Ongoing · 4 chapters
                                </Text>
                                <Ionicons
                                    name="md-heart-empty"
                                    size={20}
                                    color="white"
                                    style={{ marginLeft: 145, marginTop: 47.5 }}
                                />
                                <Ionicons
                                    name="md-more"
                                    size={20}
                                    color="white"
                                    style={{ marginTop: -20, marginLeft: 185 }}
                                />
                            </View>

                        </View>
                    </View>

                    <LinearGradient
                        style={{ position: 'absolute', top: -50, bottom: 0, width: '107.125%', height: 50 }}
                        colors={['rgba(58, 58, 58, 0.1)', 'rgba(58, 58, 58, 1)']}
                        pointerEvents={'none'}
                    />
                </Card>



            </ScrollView>
        );
    }
}

//make this component available to the app
export default FeatureTitles;
