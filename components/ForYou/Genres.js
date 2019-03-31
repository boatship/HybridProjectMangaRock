import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';

// create a component
class Genres extends Component {
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
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Cultivation</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Everybody has to start somewhere before</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>we can get to somewhere if you don't wan...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/TalesOfDemonsAndGods.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/BattleThroughTheHeavens.png')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/StarMartialGodTechnique.jpg')}
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
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>School Romance</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Ah, young love! It can start when you bump</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>intp a handsome boy at school or catch the...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/MissKomi.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/Tomo-chan.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/TheQuintessential.png')}
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
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Urban Fantasy</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>If you think that fantasy can only happen</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>in the imaginary, reral deserted areas or de...</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/MissKobayashi.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/BlueExorcist.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/CardcaptorSakura.jpg')}
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
export default Genres;
