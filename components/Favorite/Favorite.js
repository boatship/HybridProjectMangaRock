import React, { Component } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Card, Header, Avatar, ListItem } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class Favorite extends Component {
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
                    image={require('../../static/Manga/TalesOfDemonsAndGods.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Tales of Demons a...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Mad Snail</Text>
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
                    image={require('../../static/Manga/ShieldHero.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>The Rising of the Shield ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Yusagi Aneko</Text>
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
                        borderRightWidth:0.5,
                        borderRightColor: "#45B4FF",
                    }}
                    image={require('../../static/Manga/ThePromisedNeverland.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>The Promised ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}></Text>
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
                    image={require('../../static/Manga/Bleach.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Bleach</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Tite Kubo</Text>
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
                    image={require('../../static/Manga/TheQuintessential.png')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>The Quintessential ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Negi Haruba</Text>
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
                    image={require('../../static/Manga/OnePiece.jpg')}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>One Piece</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Eiichiro Oda</Text>
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
                    image={require('../../static/Manga/BattleThroughTheHeavens.png')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Battle Through The ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}></Text>
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
                    image={require("../../static/Manga/VisionLand.webp")}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Vision Land</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Magic D</Text>
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
                    image={require('../../static/Manga/BlackClover.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Black Cover</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Yuki Tabata</Text>
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

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  containerFlex: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  textcolor: {
    marginTop: 10,
    color: "gray"
  }
});

const list = [
  {
    //title: "Vision Land",
    //subtitle: "3.8.4_definitive"
  }
];

//make this component available to the app
export default Favorite;
