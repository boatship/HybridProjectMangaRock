import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class Latest extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/Hanebado!.webp')}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Hanebado!</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>1 hour ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>

                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/HenaiGirl.png')}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Henai Girl</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>1 hour ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>

                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/SwordLegend.jpg')}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Sword Legend</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>1 hour ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>


                    </ScrollView>

                </View>

                <View style={{ flex: 1 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/Flatlay.jpg')}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Flatlay</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>1 hour ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>

                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/MiracleAppStore.jpg')}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Miracle App Store</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>2 hours ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>

                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/DetectiveXeno.png')}
                        >
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Detective Xeno and th...</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>2 hours ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>

                    </ScrollView>

                </View>

                <View style={{ flex: 1 }}>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/DetectiveConan.jpg')}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Detective Conan: Han...</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>2 hours ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>

                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/Days.jpg')}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Days</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>3 hours ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>

                        <Card
                            containerStyle={{
                                height: 220,
                                width: 114,
                                marginRight: -5,
                            }}
                            image={require('../../static/Manga/YowamushiPedal.png')}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>Yowamushi Pedal - Spar...</Text>
                                    <Text style={{ color: '#7A7A7A', fontSize: 12 }}>2 hours ago</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Ionicons
                                        name="md-more"
                                        size={20}
                                        color="#7A7A7A"
                                        style={{ marginLeft: 87.5 }}
                                    />
                                </View>
                            </View>
                        </Card>
                    </ScrollView>
                </View>
            </View>

        );
    }
}

//make this component available to the app
export default Latest;
