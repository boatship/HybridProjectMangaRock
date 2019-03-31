import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class HotUpdates extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Card
                    containerStyle={{
                        height: 220,
                        width: 100,
                        marginRight: -5,
                    }}
                    image={require('../../static/Manga/LegendOfPhoenix.webp')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Legend of Phoenix</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>5 Days ago</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Ionicons
                                name="md-more"
                                size={20}
                                color="#7A7A7A"
                                style={{ marginLeft: 75 }}
                            />
                        </View>
                    </View>
                </Card>

                <Card
                    containerStyle={{
                        height: 220,
                        width: 100,
                        marginRight: -5,
                    }}
                    image={require('../../static/Manga/GentlemanDevil.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Gentleman Devil</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>yesterday</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Ionicons
                                name="md-more"
                                size={20}
                                color="#7A7A7A"
                                style={{ marginLeft: 75 }}
                            />
                        </View>
                    </View>
                </Card>

                <Card
                    containerStyle={{
                        height: 220,
                        width: 100,
                        marginRight: -5,
                    }}
                    image={require('../../static/Manga/HinowaGaYuku.jpg')}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Hinowa ga Yuku</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>4 Days ago</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Ionicons
                                name="md-more"
                                size={20}
                                color="#7A7A7A"
                                style={{ marginLeft: 75 }}
                            />
                        </View>
                    </View>
                </Card>

                <Card
                    containerStyle={{
                        height: 220,
                        width: 100,
                        marginRight: -5,
                    }}
                    image={require('../../static/Manga/TalesOfDemonsAndGods.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Tales of Demons a...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>2 Days ago</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Ionicons
                                name="md-more"
                                size={20}
                                color="#7A7A7A"
                                style={{ marginLeft: 75 }}
                            />
                        </View>
                    </View>
                </Card>

                <Card
                    containerStyle={{
                        height: 220,
                        width: 100,
                        marginRight: -5,
                    }}
                    image={require('../../static/Manga/TheLastHuman.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>The Last Human</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>today</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Ionicons
                                name="md-more"
                                size={20}
                                color="#7A7A7A"
                                style={{ marginLeft: 75 }}
                            />
                        </View>
                    </View>
                </Card>

            </ScrollView>
        );
    }
}

//make this component available to the app
export default HotUpdates;
