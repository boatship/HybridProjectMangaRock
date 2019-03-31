import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class FeaturedAuthors extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Card
                    containerStyle={{
                        height: 235,
                        width: 300,
                        marginRight: -5,
                    }}
                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                        <Image
                            source={require('../../static/Authors/Masakazu.png')}
                            style={{width: 50, height: 50, borderRadius: 50 / 2 }}
                        />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 15, marginLeft:70 , marginTop:5 , fontWeight:'bold'}}>Masakazu Ishiguro</Text>
                            <Text style={{ color: '#FF5733', fontSize: 13.25 , marginLeft:70  }}>Moderately Eccentric And Fun</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/SoredemoMachi.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/Getenrou.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/NemuruBaka.webp')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 , fontWeight:'bold'}}>VIEW</Text>

                        </View>
                    </View>
                </Card>

                <Card
                    containerStyle={{
                        height: 235,
                        width: 300,
                        marginRight: -5,
                    }}
                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                        <Image
                            source={require('../../static/Authors/Aki.jpg')}
                            style={{width: 50, height: 50, borderRadius: 50 / 2 }}
                        />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 15, marginLeft:70 , marginTop:5, fontWeight:'bold' }}>Aki Irie</Text>
                            <Text style={{ color: '#FF5733', fontSize: 13.25 , marginLeft:70  }}>Vivid and Full of Emotions</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/Harukoma.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/RanAndTheGrayWorld.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/21MelodiesForSakamoto.png')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 , fontWeight:'bold'}}>VIEW</Text>

                        </View>
                    </View>
                </Card>

                <Card
                    containerStyle={{
                        height: 235,
                        width: 300,
                        marginRight: -5,
                    }}
                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                        <Image
                            source={require('../../static/Authors/Shigeru.jpg')}
                            style={{width: 50, height: 50, borderRadius: 50 / 2 }}
                        />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 15, marginLeft:70 , marginTop:5, fontWeight:'bold' }}>Shigeru Takao</Text>
                            <Text style={{ color: '#FF5733', fontSize: 13.25 , marginLeft:70  }}>Heart-warming Love Story</Text>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/DearMine.jpg')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/GoldenDays.webp')}
                                    /></View>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                                        source={require('../../static/Manga/IsshoNiNeyouYo.webp')}
                                    /></View>
                            </View>
                            <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 , fontWeight:'bold'}}>VIEW</Text>

                        </View>
                    </View>
                </Card>

                
            </ScrollView>
        );
    }
}

//make this component available to the app
export default FeaturedAuthors;
