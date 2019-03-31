import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';

// create a component
class FeatureCollections extends Component {
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
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Short and Humorous Manga to Read ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Read these sgort and entertaining stories</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>to rewind before bedtime. Each chapter is ...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/GagMangaBiyori.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/Mako-sanToHachisuka-kun.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/TheDragonNextDoor.webp')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140, fontWeight: 'bold' }}>CHECK IT OUT</Text>

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
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Mafia Gangs That will Blow Your Mind</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Mafia are known to have an array of</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>weapons, scary and tough gangs, and a ma...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/baccano.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/BananaFish.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/BloodyMonday.jpg')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140, fontWeight: 'bold' }}>CHECK IT OUT</Text>

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
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Action-Packed Ninja Series You ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Are you interested in ninjas and wanted to</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>read manga about them? Then this is the r...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/Basilisk.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/BeHeun.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/DontenzNiWarau.webp')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140, fontWeight: 'bold' }}>CHECK IT OUT</Text>

                        </View>
                    </View>
                </Card>
            </ScrollView>
        );
    }
}

//make this component available to the app
export default FeatureCollections;
